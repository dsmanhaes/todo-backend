import { Todo } from "./@types/Todo";

const todos: Todo[] = [];

export const todoRepository = {
  getAll: () => todos,
  getById: (id: number) => {
    if (id < todos.length) return todos[id - 1];
  },
  getByText: (text: string) => todos.filter((todo) => todo.text.includes(text)),
  add: (todo: Todo) => todos.push(todo),
  update: (id: number, todo: Todo) => {
    if (id < todos.length) {
      todos[id - 1] = todo;
      return todo;
    }
  },
  remove: (id: number) => {
    if (id < todos.length) todos.splice(id - 1, 1);
  },
};
