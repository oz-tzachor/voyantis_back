
# Backend - Queue Management System

This is the backend for the Queue Management System, built with Express. The backend handles message queue management, including adding and retrieving messages from queues.

## How to Run

1. Navigate to the project folder:

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

## Project Structure

```
backend
│
├── api                     # Defines routes and request handlers for queue management
├── services                # Contains service files for queue operations
├── server.js               # Main entry point to start the server
└── package.json            # Project dependencies and scripts
```

## API Endpoints

### 1. **POST /:queue_name**

- **Description**: Adds a new message to the specified queue. If the queue doesn’t exist, it creates one.
- **Request Body**: JSON containing the message data.
- **Example**: `POST /queue1` with `{ "message": "Hello World" }` in the body.

### 2. **GET /:queue_name**

- **Description**: Retrieves the next message from the specified queue.
- **Query Parameters**:
  - `timeout` (optional): Specifies how long (in milliseconds) to wait if the queue is empty. Defaults to 10 seconds.
- **Response**: Returns the next message, or `204 No Content` if no messages are available after the timeout.

### 3. **GET /queues**

- **Description**: Lists all queues with their respective message counts.
- **Response**: Array of objects, each with `queueName` and `count` properties.

## Key Files

- **server.js**: Initializes and runs the Express server.
- **dataRouter.js**: Defines routes for message publishing, retrieval, and queue management.
- **services/queueService.js**: Handles queue operations in memory, storing messages by queue name.

## Notes

- **Persistence**: Queues are stored in-memory. Restarting the server clears all queues. For production, consider using a database.
- **Timeout Handling**: `GET /:queue_name` includes a `timeout` parameter, allowing the server to wait if no messages are available.
