# Disaster Insight Application

## Overview

The **Disaster Insight Application** is a full-stack web application that provides a visualization of disaster data on a map. The backend is built using Java Spring Boot with Playwright integration for data extraction from the **EM-DAT** database, and the frontend is developed using **React** with **Leaflet.js** for rendering maps, both marker maps and heatmaps. The application allows users to query, download, and process disaster data, and visualize the results on an interactive map.

## Features

- **Disaster Data Visualization**: Displays disasters from various types (flood, earthquake, etc.) on a marker map or heatmap.
- **Data Extraction from EM-DAT**: Uses Playwright to automate downloading of disaster data from the EM-DAT website.
- **Data Processing**: Python scripts process the downloaded data and store it in a PostgreSQL database.
- **Interactive UI**: Users can select disaster types from a dropdown and switch between marker maps and heatmaps.
- **Responsive Design**: The frontend is designed to work on different screen sizes.

## Technologies Used

### Backend

- Java Spring Boot
- Playwright (for data extraction automation)
- JPA/Hibernate (for database interaction)
- PostgreSQL (database)
- Python (for data processing)

### Frontend

- React.js
- Leaflet.js (for map rendering)
- Tailwind CSS (for responsive design)

## Installation & Setup

### Prerequisites

- **Java 17** or higher
- **PostgreSQL** installed and running
- **Node.js** (for running React app)
- **Python 3.10+** (for running data processing scripts)
- **Maven** (for Java project management)

### 1. Backend Setup

1. **Clone the repository**:

   ```bash
      git clone <repository-url>
      cd disaster-insight
   ```

2. **Configure application properties: Go to the src/main/resources/application.properties file and update the following fields**:

   #### Database connection details

   spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
   spring.datasource.username=postgres
   spring.datasource.password=postgres

   #### Python script and file paths

   python.script.path=src/main/resources/scripts/app.py
   downloaded.file.path=src/main/resources/downloaded/file.xlsx
   python.requirements.path=src/main/resources/scripts/requirements.txt
   python.venv.path=src/main/resources/venv/da

3. **PostgreSQL Database Setup:
   Ensure that PostgreSQL is installed and running. You can set up the database with the following details**:

   Database: `postgres`

   Username: `postgres`

   Password: `postgres`

4. **Run the Backend**:
   Build and run the backend using Maven. Open a terminal in the backend root directory and execute:

   ```bash
   cd da
   mvn clean install
   java -jar target/da.jar
   ```

### 2. Frontend Setup

1. **Install Dependencies**:
   Navigate to the frontend folder and install all required dependencies by running the following command:

   ```bash
   cd da-ui
   npm install
   ```

2. **Run the Frontend**:
   Start the React application using the following command:

   ```bash
   npm start
   ```

### 3. Python Setup (Optional)

Note : Because the code already creates virtual environment for python. Make sure you have python installed in your container or system

1. **Create Virtual Environment**:
   Navigate to the scripts folder and create a Python virtual environment:

   ```bash
   python3 -m venv venv
   ```

2. **Activate Virtual Environment**:
   After creating the environment, activate it:

   ```bash
   source venv/bin/activate  # On macOS/Linux #
   .\venv\Scripts\activate   # On Windows #
   ```

3. **Install Python Dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Python Script**:
   To test the script manually (although this will run automatically via the backend), run:

   ```bash
   python3 app.py src/main/resources/downloaded/file.xlsx
   ```

### 4. Running with Docker and Docker Compose

1. **Set up Docker Compose**:

   The project comes with a docker-compose.yml file to easily manage the Postgres database and PgAdmin.

2. **Start Docker Containers**:

   Use the following command to spin up the database and PgAdmin containers:

   ```bash
   docker compose up -d
   ```

   This will start:

   **PostgreSQL** on localhost:5432

   **PgAdmin** on localhost:8001

   You can access the database through PgAdmin for testing and managing the database.

3. **Stop Docker Containers**:

   When you want to stop the containers, run:

   ```bash
   docker compose down
   ```

### 5. Running the Complete Application

1. **Download the EM-DAT Data**:

   In the React frontend, use the "Download EM-DAT Data" button to fetch the latest dataset from the EM-DAT portal.

2. **Process Data in Backend**:

   After downloading the file, a second button will appear allowing you to update the database. Click it to trigger the data processing and insertion into the PostgreSQL database.

3. **Map Visualization**:

   Use the map options to visualize the disaster data.
   Switch between Marker Map and Heat Map using the sidebar in the application.

### 5. Known Issues

- Ensure that the Python virtual environment is activated correctly before running any data processing.
- Handle larger datasets carefully as loading may take time, especially for visualizations.
