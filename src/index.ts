import express from "express";
import mainRouter from "./routers";
import cors from "cors";

const app = express();
const port = 3033;

app.use(cors());

app.use(express.json());

app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
