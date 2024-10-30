"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataRouter = express_1.default.Router();
const queues = new Map(); // A simple in-memory data store
// Health check
dataRouter.get("/:queue_name", (req, res) => {
    const queue = req.params.queue_name;
    console.log("q", queue);
    return res.status(200).json(`queue is ${queue} !`);
});
// Create new data entry
dataRouter.post("/", (req, res) => {
    const newData = req.body;
    const id = Date.now(); // Using timestamp as a unique ID
    queues.set(id, newData);
    res.status(201).json({ message: "Data created successfully", id });
});
exports.default = dataRouter;
