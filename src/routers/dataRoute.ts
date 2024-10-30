import express, { Request, Response } from "express";

const dataRouter = express.Router();
// In-memory queue storage
const queues = new Map<string, Array<any>>();

// Add a new message to the desired queue
dataRouter.post("/:queue_name", (req: Request, res: Response) => {
  const queueName = req.params.queue_name;
  const message = req.body;

  // Check if the queue exists, if not, create it and add the message
  if (queues.has(queueName)) {
    queues.get(queueName)?.push(message);
  } else {
    queues.set(queueName, [message]);
  }

  res.status(201).json({ message: "Message added successfully", queueName });
});

// Get list of all queues with message count
dataRouter.get("/queues", (req: Request, res: Response) => {
  const queueList = Array.from(queues.entries()).map(
    ([queueName, messages]) => ({
      queueName,
      count: messages.length,
    })
  );

  res.status(200).json(queueList);
});

// Retrieve the next message from the queue, with optional timeout
dataRouter.get("/:queue_name", async (req: Request, res: Response) => {
  const queueName = req.params.queue_name;
  const timeout = parseInt(req.query.timeout as string) || 10000;

  // Check if the queue exists and has messages
  if (!queues.has(queueName) || queues.get(queueName)?.length === 0) {
    // Wait for messages to be added or timeout
    await new Promise((resolve) => setTimeout(resolve, timeout));

    // Check again if messages were added during the timeout
    if (!queues.has(queueName) || queues.get(queueName)?.length === 0) {
      return res.status(204).send();
    }
  }

  // Retrieve the next message in the queue
  const message = queues.get(queueName)?.shift();

  res.status(200).json(message);
});

export default dataRouter;
