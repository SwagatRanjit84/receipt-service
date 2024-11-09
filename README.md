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
