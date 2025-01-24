import { Router } from "express";
import { todoRepository } from "./todoRepository";

const todoRouter = Router();

todoRouter.get("/", (_req, res) => {
  res.json(todoRepository.getAll());
});

todoRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) res.status(400).send("Invalid Id!");
  else {
    const todo = todoRepository.getById(id);
    if (!todo) res.status(404).send("Id not found!");
    else res.json(todo);
  }
});

todoRouter.get("/text/:text", (req, res) => {
  const text = req.params.text;
  const todos = todoRepository.getByText(text);
  if (todos.length === 0) res.status(404).send(`Text ${text} not found!`);
  else res.json(todos);
});

todoRouter.post("/", (req, res) => {
  const todo = req.body;
  const id = todoRepository.add(todo);
  res.status(201).json({ id, ...todo });
});

todoRouter.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = req.body;
  if (isNaN(id)) res.status(400).send("Invalid Id!");
  else if (!todo.text) res.status(400).send("Invalid text!");
  else {
    const newTodo = todoRepository.update(id, todo);
    if (!newTodo) res.status(404).send("Id not found!");
    else res.json(newTodo);
  }
});

todoRouter.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) res.status(400).send("Invalid Id!");
  else {
    todoRepository.remove(id);
    res.status(204).send();
  }
});

export { todoRouter };
