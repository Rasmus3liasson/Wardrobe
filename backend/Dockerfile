# Use a base image with Java pre-installed
FROM openjdk:21-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the WAR file into the container
COPY target/roundUp-0.0.1-SNAPSHOT.war app.war 

# Expose the port the app runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.war"]