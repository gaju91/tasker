# 🌟 Tasker🌟

## Overview 🎯

Tasker is the central hub 🌐 of our application, seamlessly integrating 🤝 the User and Task Management Microservices. It's crafted to provide a unified interface 🖥️ for managing both tasks 📝 and user data 👥 with ease and efficiency.

## Communication Diagram
![chatuml-diagram (1)](https://github.com/gaju91/tasker/assets/47264152/f4b70111-2ce5-478d-be47-0acfd4a7f4d0)


## API Reference 📚

Tasker unites two pivotal microservices:

1. **User Microservice 🧑‍💼**: Handles all aspects of user management. For detailed info, check out the [User Microservice Documentation](https://github.com/gaju91/tasker/tree/main/user-ms-v1#readme).

2. **Task Management Microservice 📋**: Manages tasks from creation to completion. Dive into the [Task Management Microservice Documentation](https://github.com/gaju91/tasker/tree/main/task-ms-v1#readme) for more.

### Key Features 🌈

- Unified access point 🚪 to User and Task Management functionalities.
- Simplified interactions 🤹 with a complex microservices architecture.
- Secure handling 🔐 of user sessions and task operations.

### Endpoints Overview 📍

Tasker's endpoints are a mix of functionalities from both the User and Task Management Microservices:

- **User Operations 🧑‍💼**: Includes user registration, authentication, profile management, and admin functions.
- **Task Operations 📅**: Encompasses task creation, updating, listing, and management with options for filtering and sorting.

### Authentication 🔒

Tasker uses JWT-based authentication for securing endpoints and managing user sessions, ensuring a secure and reliable user experience.

## Running Tasker Locally 🏠 🏃‍♂️

### Prerequisites 📋

- Node.js: Ensure it's [downloaded and installed](https://nodejs.org/).
- Access to both User and Task Management Microservices.

### Steps to Run 🛠️

1. **Clone the Repository**:
   
   ```bash
   git clone <tasker-repository-url>
   cd path/to/tasker
   ```

2. **Install Dependencies**:
   
   ```bash
   npm install
   ```

3. **Configure Environment**:
   
   Set up the necessary environment variables to connect to the User and Task Management Microservices.

4. **Launch the Application**:
   
   ```bash
   npm start
   ```

## Additional Information 📝

- **Testing**: Tasker includes comprehensive unit and integration tests 🧪 for its critical functionalities.
- **Documentation Links** 📖:
  - [User Microservice Documentation](https://github.com/gaju91/tasker/tree/main/user-ms-v1#readme)
  - [Task Management Microservice Documentation](https://github.com/gaju91/tasker/tree/main/task-ms-v1#readme)
