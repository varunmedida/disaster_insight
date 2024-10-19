import pandas as pd
from sqlalchemy import create_engine, text
import sys

# Get the file path from the arguments (assuming it's passed from the Spring Boot API)
file_path = sys.argv[1]  # First argument passed from Spring Boot

# Read the Excel file from the specific sheet 'EM-DAT Data'
df = pd.read_excel(file_path, sheet_name='EM-DAT Data')  # Specify the correct sheet

# Truncate any string columns longer than 255 characters
df = df.applymap(lambda x: x[:255] if isinstance(x, str) and len(x) > 255 else x)

# Step 1: Remove unnecessary columns
columns_to_drop = ['External IDs', 'Admin Units', 'Event Name']  # Add columns you want to drop
df = df.drop(columns=columns_to_drop)

# Step 2: Handle missing values
monetary_columns = [
    'Reconstruction Costs (\'000 US$)',
    'Reconstruction Costs, Adjusted (\'000 US$)',
    'Insured Damage (\'000 US$)',
    'Insured Damage, Adjusted (\'000 US$)',
    'Total Damage (\'000 US$)',
    'Total Damage, Adjusted (\'000 US$)'
]
df[monetary_columns] = df[monetary_columns].fillna(0)

# Fill NaN for Disaster Type with 'Unknown'
df['Disaster Type'] = df['Disaster Type'].fillna('Unknown')

# Step 3: Convert date columns to datetime format
df['Entry Date'] = pd.to_datetime(df['Entry Date'], errors='coerce')
df['Last Update'] = pd.to_datetime(df['Last Update'], errors='coerce')

# Step 4: Standardize disaster type categories (ensure consistency)
df['Disaster Type'] = df['Disaster Type'].str.strip().str.title()

# Step 5: Remove duplicate rows based on the 'DisNo.' (Disaster Number)
df = df.drop_duplicates(subset='DisNo.')

# Step 6: Rename columns to match the entity class (disaster_data table)
df.columns = df.columns.str.strip().str.lower().str.replace(' ', '_').str.replace('\'', '').str.replace(',', '').str.replace('(', '').str.replace(')', '')

df = df.rename(columns={
    'disno.': 'disaster_number',
    'iso': 'country_code',
    'disaster_type': 'disaster_type',
    'reconstruction_costs_000_us$': 'reconstruction_costs_usd',
    'reconstruction_costs_adjusted_000_us$': 'adjusted_reconstruction_costs_usd',
    'insured_damage_000_us$': 'insured_damage_usd',
    'insured_damage_adjusted_000_us$': 'adjusted_insured_damage_usd',
    'total_damage_000_us$': 'total_damage_usd',
    'total_damage_adjusted_000_us$': 'adjusted_total_damage_usd',
    'entry_date': 'entry_date',
    'last_update': 'last_update',
    'aid_contribution_000_us$': 'aid_contribution_usd',
    'ofda/bha_response': 'ofda_bha_response',
    "no._injured": "injured_number",
    "no._affected": "affected_number",
    "no._homeless": "homeless_number"
})

# Step 7: Connect to the PostgreSQL database
DB_USER = 'postgres'
DB_PASS = 'postgres'
DB_HOST = 'localhost'  # Change if your database is hosted elsewhere
DB_PORT = '5432'  # Default PostgreSQL port
DB_NAME = 'postgres'

# Create the database connection string
engine = create_engine(f'postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}')

# Step 8: Fetch existing disaster numbers from the database
with engine.connect() as connection:
    existing_disasters_query = "SELECT disaster_number FROM disaster_data"
    existing_disasters = pd.read_sql(existing_disasters_query, connection)
    existing_disaster_numbers = set(existing_disasters['disaster_number'].tolist())

# Step 9: Filter new records (disaster numbers not present in the database)
new_records = df[~df['disaster_number'].isin(existing_disaster_numbers)]

# Step 10: Insert only new records into the database
if not new_records.empty:
    new_records.to_sql('disaster_data', engine, if_exists='append', index=False)
    print(f"{len(new_records)} new records successfully inserted into the disaster_data table.")
else:
    print("No new records to insert. All disaster records are already present in the database.")
