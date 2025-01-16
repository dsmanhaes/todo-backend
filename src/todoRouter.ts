import { Router } from "express";
import { todoRepository } from "./todoRepository";

const todoRouter = Router();

todoRouter.get('/', (_req, res) => {
  res.json(todoRepository.getAll());
});

todoRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todoRepository.getById(id);
  res.json(todo);
});

todoRouter.get('/text/:text', (req, res) => {
  const text = req.params.text;
  const todos = todoRepository.getByText(text)
  res.json(todos);
});

todoRouter.post('/', (req, res) => {
  const todo = req.body;
  const id = todoRepository.add(todo);
  res.status(201).json({id, ...todo});
});

todoRouter.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = req.body;
  const newTodo = todoRepository.update(id, todo);
  res.json(newTodo);
});

todoRouter.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  todoRepository.remove(id);
  res.status(204).send();
});

export { todoRouter };
