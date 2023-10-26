# Book Store App

Welcome to the Book Store App! This application is built using Next.js for the frontend, Spring Boot for the backend, and AWS DynamoDB for data storage. You can access the live deployment of this app at <a href="https://book-store-monishwarmc.vercel.app" target="_blank">Visit the live deployment</a>.

## Features

- View book details including title, image, and price.
- Add new books.
- delete books.
- edit book details.

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

- Node.js and npm (for Next.js)
- Java 17+ and Maven (for Spring Boot)
- AWS DynamoDB setup with the necessary tables and configurations
- AWS Access Keys for DynamoDB (for local development)
- Set up environment variables for configuration

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/monishwarmc/bookStore.git
   cd book-store-app

### To run backend

2. Navigate to `backend` directory and install dependencies:
   
   ```bash
   cd backend
   mvn clean install

3. Set up AWS-dynamoDB environmental variables and run locally

    ```bash
    mvn spring-boot:run
   
### To start frontend

4. Navigate to `frontend` directory and install dependencies:

    ```bash
    cd ../frontend
    npm install

5. change api to localhost and run locally

    ```bash
    npm run dev