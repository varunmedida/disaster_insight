# Use an official Maven image to build the application
FROM maven:3.8.1-openjdk-17 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml and download dependencies
COPY pom.xml .

# Download the project dependencies
RUN mvn dependency:go-offline -B

# Copy the entire project
COPY . .

# Package the application (skip tests to make build faster)
RUN mvn clean package -DskipTests

# Use an official JDK runtime to run the application
FROM openjdk:11-jre-slim

# Set the working directory
WORKDIR /app

# Copy the Spring Boot jar file from the Maven build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port that the app will run on
EXPOSE 8080

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
