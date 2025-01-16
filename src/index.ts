import express from "express";
import { todoRouter } from "./todoRouter";

const app = express();
const port = 7007;

app.use(express.json())

app.get('/', (_req, res) => {
  res.send(`Try access <a href="http://localhost:${port}/todo">/todo</a> endpoint`);
});

app.use('/todo', todoRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
