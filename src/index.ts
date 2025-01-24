import express from "express";
import { todoRouter } from "./todoRouter";
import cors from "cors";

const app = express();
const port = 7007;

app.use(cors());
app.use(express.json());

app.use("/", todoRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
