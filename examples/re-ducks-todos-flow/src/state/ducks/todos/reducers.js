// @flow
import { combineReducers } from "redux";
import type { Todos, Todo, Id, Text, Action, VisibilityFilter } from "./types";

/* state shape
todosState {
  todos: [],
  visibilityFilter: "SHOW_ALL"
} */

function createTodo(id: Id, text: Text): Todo {
  return { id, text, completed: false };
}

function toggleTodo(todos: Todos, id: Id): Todos {
  return todos.map(todo => {
    if (todo.id !== id) {
      return todo;
    }
    return Object.assign({}, todo, { completed: !todo.completed });
  });
}

const todos = (state: Todos = [], action: Action): Todos => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, createTodo(action.id, action.text)];
    case "TOGGLE_TODO":
      return toggleTodo(state, action.id);
    default:
      return state;
  }
};

const visibilityFilter = (
  state: VisibilityFilter = "SHOW_ALL",
  action: Action
): VisibilityFilter => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

export default todosReducer;
