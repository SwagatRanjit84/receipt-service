# **Receipts Services**

## **Content**

1. Goal
2. Core Requirements
3. Project Overview
4. Architecture Diagram
5. Project Structure
6. Setup Instructions
7. Output
8. Additional requirements

#

## **1. Goal**

To create a web service with an API that calculates points based on the receipt provided in the given api.yml file.

## **2. Core Requirements**

To expose an API with one endpoint to input the receipt details based on the given format and another endpoint to calculate total points based on the specified rules.
Make dockerize setup to run the service.

## **3. Project overview**

This service is developed using NodeJS 21.6 and TypeScript 5.6.3. It is configured to listen on port 3000 for handling HTTP requests. You need to install NodeJS 21.6 before running this service on your machine. Alternatively, you can follow the Docker instructions provided below. This project provides a API service that:

- Calculates total points based on specified rules.

- Includes unit tests for each module to ensure code accuracy and functionality.

## **4. Architecture Diagram**

![Success GET](/architecture.png)

Explanation of Each Component in above diagram

- Client(View): A client(like external API consumer like Postman or frontend app) sends HTTP requests to Express (server). GET request is used to get receipt points and POST request to submit receipts.

* Receipt Service Controller: It acts as mediator between view and business logic. Further, it handles the HTTP requests and responses. Example: GET /receipts/:id/points and POST /receipts/process. POST endpoint is used to validate receipt, calculates total point and saves receipt data.

* Business Logic: It consists of following logic.

  - Validation: Makes sure that the receipt follows correct format using ajv package.

  * Points Calculation: Calculates the points on the basis of receipt following the specified rules.

  * Generation of Receipt ID: Using uuid library, the unique receipt ID is generated.

  * Receipt ID Generation: The generateReceiptId function creates a unique ID for each receipt.

- Model: It contains the receipt schema that was mentioned in api.yml

- In-Memory Store: Receipts and its corresponding points are temporaily stored in memory rather than database. In production, database could be used to store permanently.

## **5. Project Structure**

<!-- Directory and files

1.  src
    - controllers
      - receiptController.ts
    - models
      - receipt.ts
    - routes
      - receiptRoutes.ts
    - schemas
      - receiptSchema.ts
    - services
      - pointsService.ts
    - app.ts
2.  .gitignore
3.  api.yml
4.  output
5.  DockerFile
6.  nodemon.json
7.  package.json
8.  tsconfig.json -->

## **Description of project structure**

**controllers/receiptController.ts:** It handles HTTP requests and responses, validates input and delegates for business logic to services and models.

**models/receipt.ts:** It has the functionality of generating ID using uuid library and store the points of receipt.

**routes/receiptRoutes.ts:** This file defines the routes for API, mapping requests to its corresponding controller functions.

**schemas/receiptSchema.ts:** It contains the schema definition of receipt that helps to validate the data coming from the user.

**services/pointsService.ts:** It has the logic for calculating points based on the receipt.

**app.ts:** Initialize the Express app and use the routes along with error handling.

## **Other files**

**DockerFile:** It defines a multi-stage build process, firstly compiling the code in build stage and creating production-ready container which has necessary files and dependencies.

**nodemon.json:** It sets the nodemon to watch typescript files of src directory. With the help of nodemon, it automatically restarts the applications if changes are made. It uses ts-node to execute app.ts file.

**package.json:** It has all libraries, development tools and dependencies required to run this service. Express.js is used to setup web application. Also, it consists of development tools like nodemon, ts-node and dependecies.

**README.md:** Documentation for setting up and using the project.

**tsconfig.json:** It specifies the compiler options for this project. It compiles typescript files of src folder to javascript in dist folder using commonJS module system. Also, it enables strict type-checking along with including all .ts files and excluding node_modules folder.

**output:** It contains screenshots of the output showing both error and successful POST and GET HTTP requests.

## **6. Setup Instructions**

Note: I did this project in NodeJS instead of Go so I will provide instructions to run dockerize container.

- Clone the repository in terminal and then navigate to the corresponding working directory.

```
https://github.com/SwagatRanjit84/testing.git
cd receipts-service
```

- Build the Docker image in the root of the project where Dockerfile is located

```
docker build -t receipts-service .
```

- Run the Docker image and it maps port 3000 on your local machine to port 3000 in the Docker container, which is the port the app will run on.

```
docker run -p 3000:3000 receipts-service
```

- Accesing the service: Now, you should be able to see the application in 3000 port running inside the Docker container. Open the postman using http://localhost:3000.

  - Find details of container:
    ```
    docker ps
    ```
  - You can stop the container using name or id:
    ```
    docker stop receipts-service
    ```
    OR
    ```
    docker stop :containerid
    ```

## **7. Output**

Generation of receipt using POST request.
![Success GET](/output/postSuccess.png)

Fetching the total points of receipt using GET request.
![Success GET](/output/getSuccess.png)

Error when wrong URL for GET request.
![Success GET](/output/error.png)

Error when fetching wrong receipt id.
![Success GET](/output/getError.png)

Error with wrong format of receipt.
![Success GET](/output/postError.png)
