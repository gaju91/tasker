# 🚀 Task Management Microservice Documentation

## Overview 📖

The Task Management Microservice 📋 is designed for comprehensive task handling in various applications. It enables users to create, update, start, complete, retrieve, and delete tasks efficiently.

## API Reference 📚

### Data Types 📊

#### Task 📝

| Field        | Type     | Description                                      |
|--------------|----------|--------------------------------------------------|
| _id          | string   | Unique identifier for the task                   |
| user         | string   | ID of the user associated with the task          |
| title        | string   | The title of the task                            |
| description  | string   | Detailed description of the task                 |
| priority     | enum     | Priority of the task (low, medium, high)         |
| dueDate      | date     | The due date for task completion                 |
| status       | enum     | Current status of the task (pending, in progress, done) |
| createdAt    | datetime | Timestamp of when the task was created          |
| updatedAt    | datetime | Timestamp of the last update to the task         |

## API Endpoints

### Commands 🛠️

#### 1. Create Task ➕
- **Command**: `create_task`
- **Description**: Adds a new task to the system.

  **Request**:
  ```json
  {
    "cmd": "create_task",
    "data": {
      "user": "user_id",
      "title": "Task Title",
      "description": "Task Description",
      "priority": "medium",
      "dueDate": "2023-12-31"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "data": {
      "_id": "task_id",
      "user": "user_id",
      "title": "Task Title",
      "description": "Task Description",
      "status": "pending",
      "priority": "medium",
      "dueDate": "2023-12-31",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    "message": "Task created successfully"
  }
  ```

#### 2. Update Task 🔄
- **Command**: `update_task`
- **Description**: Modifies an existing task's details.

  **Request**:
  ```json
  {
    "cmd": "update_task",
    "data": {
      "_id": "task_id",
      "title": "Updated Task Title",
      "description": "Updated Description"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
   "data": {
      "_id": "task_id",
      "user": "user_id",
      "title": "Updated Task Title",
      "description": "Updated Description",
      "status": "pending",
      "priority": "medium",
      "dueDate": "2023-12-31",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    "message": "Task updated successfully"
  }
  ```

#### 3. Start Task ▶️
- **Command**: `start_task`
- **Description**: Marks a task as in progress.

  **Request**:
  ```json
  {
    "cmd": "start_task",
    "data": {
      "_id": "task_id"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "data": {
      "_id": "task_id",
      "user": "user_id",
      "title": "Task Title",
      "description": "Task Description",
      "status": "in progress",
      "priority": "medium",
      "dueDate": "2023-12-31",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    "message": "Task started successfully"
  }
  ```

#### 4. Complete Task ✅
- **Command**: `complete_task`
- **Description**: Marks a task as completed.

  **Request**:
  ```json
  {
    "cmd": "complete_task",
    "data": {
      "_id": "task_id"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "data": {
      "_id": "task_id",
      "user": "user_id",
      "title": "Task Title",
      "description": "Task Description",
      "status": "done",
      "priority": "medium",
      "dueDate": "2023-12-31",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    "message": "Task completed successfully"
  }
  ```

#### 5. Get Tasks 🔍
- **Command**: `get_tasks`
- **Description**: Retrieves a list of tasks with optional filters.

  **Request**:
  ```json
  {
    "cmd": "get_tasks",
    "data": {
      "user": "user_id",  // Optional
      "limit": 10,        // Optional
      "offset": 0,         // Optional
      "sortBy": "field_name dueDate",
      "sortDir": "asc | desc"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "data": [
      {
        "_id": "task_id",
        "user": "user_id",
        "title": "Task Title",
        "description": "Task Description",
        "status": "in progress",
        "priority": "medium",
        "dueDate": "2023-12-31",
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      },
    ],
    "message": "Tasks fetched successfully"
  }
  ```

#### 6. Get Task By ID 👀
- **Command**: `get_task_by_id`
- **Description**: Retrieves a specific task using its ID.

  **Request**:
  ```json
  {
    "cmd": "get_task_by_id",
    "data": {
      "_id": "task_id"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
     "data": {
      "_id": "task_id",
      "user": "user_id",
      "title": "Task Title",
      "description": "Task Description",
      "status": "in progress",
      "priority": "medium",
      "dueDate": "2023-12-31",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    "message": "Task retrieved successfully"
  }
  ```

#### 7. Delete Task ❌
- **Command**: `delete_task`
- **Description**: Removes a task from the system.

  **Request**:
  ```json
  {
    "cmd": "delete_task",
    "data": {
      "_id": "task_id"
    }
  }
  ```

  **Response**:
  ```json
  {
    "status": "success",
    "message": "Task deleted successfully"
  }
  ```

## Running the Project Locally 🏃‍♂️💻

### Prerequisites

Before starting the Task Management Microservice, ensure you have:

- Node.js: [Download and install](https://nodejs.org/)
- MongoDB: [Download and install](https://www.mongodb.com/try/download/community)

### Steps to Run Locally

1. **Clone the Repository**:
   
   ```bash
   git clone <repository-url>
   cd path/to/task-management-microservice
   ```

2. **Install Dependencies**:
   
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the Microservice**:
   
   ```bash
   npm start
   ```