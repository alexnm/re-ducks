// @flow
import type { Todos, VisibilityFilter } from "./types";

const getVisibleTodos = (todos: Todos, filter: VisibilityFilter): Todos => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default {
  getVisibleTodos
};
