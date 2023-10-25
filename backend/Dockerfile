# # Use an official OpenJDK runtime as the base image
# FROM openjdk:17

# # Set the working directory in the container
# WORKDIR /backend

# # Copy the JAR file into the container
# COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# # Expose the port your Spring Boot application listens on
# EXPOSE 8080

# # Define the command to run your Spring Boot application
# CMD ["java", "-jar", "app.jar"]


FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/backend-0.0.1-SNAPSHOT.jar backend.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "backend.jar" ]
