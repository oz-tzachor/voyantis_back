import express from "express";
import dataRouter from "./dataRoute";
const mainRouter = express.Router();

mainRouter.use("/", dataRouter);

export default mainRouter;
