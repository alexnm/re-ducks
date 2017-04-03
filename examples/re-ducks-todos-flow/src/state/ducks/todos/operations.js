// @flow
import actions from "./actions";
import type { Id, Text, VisibilityFilter, Action } from "./types";

const addTodo = (text: Text): Action => {
  return actions.addTodo(text);
};

const setVisibilityFilter = (filter: VisibilityFilter): Action => {
  return actions.setVisibilityFilter(filter);
};

const toggleTodo = (id: Id): Action => {
  return actions.toggleTodo(id);
};

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};
