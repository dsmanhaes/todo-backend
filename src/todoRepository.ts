import { Todo } from "./@types/Todo";

const todos: Todo[] = [];

export const todoRepository = {
  getAll: () => todos,
  getById: (id: number) => todos[id - 1],
  getByText: (text: string) => todos.filter((todo) => todo.text.includes(text)),
  add: (todo: Todo) => todos.push(todo),
  update: (id: number, todo: Todo) => (todos[id - 1] = todo),
  remove: (id: number) => {
    todos.splice(id - 1, 1);
  },
};
