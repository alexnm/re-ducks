import types from "./types";

let nextTodoId = 0;

export const addTodo = text => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
});

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};
