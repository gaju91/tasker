# 🚀 User Microservice Documentation

## Overview 📖

The User Microservice 🧑‍💼 is responsible for managing user data within our system. It offers functionalities such as creating, retrieving, updating, and deleting user information.

## API Reference 📚

### Data Types 📊

#### User 👤

| Field    | Type   | Description                      |
|----------|--------|----------------------------------|
| _id       | int    | Unique identifier for the user   |
| username | string | The username of the user         |
| password | string | The password of user
| email    | string | The email address of the user    |
| type     | enum   | The type of user (default, admin)|

## API Endpoints
### Commands 🛠️

#### 1. Create User ➕
- **Command**: `create_user`
- **Description**: Creates a new user in the system.

  **Request**:
  ```json
  {
    "cmd": "create_user",
    "data": {
      "username": "john_doe",
      "email": "john.doe@example.com",
      "password": "pass@1234",
      "type": "default"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "data": {
      "id": "1",
      "username": "john_doe",
      "email": "john.doe@example.com",
      "type": "default"
    },
    "message": "User created successfully"
  }
  ```

### 2. Update User 🔄

- **Command**: `update_user`
- **Description**: Updates an existing user's information.

  **Request**:
  ```json
  {
    "cmd": "update_user",
    "data": {
      "id": "1",
      "username": "john_doe_updated",
      "email": "john.updated@example.com"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "data": {
      "id": "1",
      "username": "john_doe_updated",
      "email": "john.updated@example.com",
      "type": "default"
    },
    "message": "User updated successfully"
  }
  ```

#### 3. Get User 👀

- **Command**: `get_user`
- **Description**: Retrieves information for a specific user.

  **Request**:
  ```json
  {
    "cmd": "get_user",
    "data": {
      "_id": "1"
    }
  }
  ```
  
### 4. Get All Users 🔍

- **Command**: `get_all_users`
- **Description**: Retrieves a list of users with optional filtering and pagination.

  **Request**:
  ```json
  {
    "cmd": "get_all_users",
    "data": {
      "username": "john_doe",  // Optional
      "email": "john@example.com",  // Optional
      "type": "default",  // Optional
      "limit": 10,  // Optional
      "offset": 0  // Optional
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "1",
        "username": "john_doe",
        "email": "john.doe@example.com",
        "type": "default"
      }
    ],
    "message": "Users fetched successfully"
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "data": {
      "id": "1",
      "username": "john_doe",
      "email": "john.doe@example.com",
      "type": "default"
    },
    "message": "User fetched successfully"
  }
  ```

### 5. Delete User ❌

- **Command**: `delete_user`
- **Description**: Deletes a user from the system.

  **Request**:
  ```json
  {
    "cmd": "delete_user",
    "data": {
      "id": "1"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "message": "User deleted successfully"
  }
  ```
## Running the Project Locally 🏃‍♂️💻

### Prerequisites

Before running the User Microservice locally, ensure you have the following installed:

- Node.js: [Download and install](https://nodejs.org/)
- NPM (Node Package Manager): Comes with Node.js

### Steps to Run Locally

1. **Clone the Repository**:
   
   ```bash
   git clone <repository-url>
   cd path/to/user-microservice
   ```

2. **Install Dependencies**:
   
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   
   ```env
   PORT=4000
   HOST=localhost
   DB_CONNECTION_STRING=your_database_connection_string
   ```

4. **Start the Microservice**:
   
   ```bash
   npm start
   ```
