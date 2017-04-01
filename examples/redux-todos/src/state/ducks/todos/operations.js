import actions from "./actions";

const addTodo = text => {
  return actions.addTodo(text);
};

const setVisibilityFilter = filter => {
  return actions.setVisibilityFilter(filter);
};

const toggleTodo = id => {
  return actions.toggleTodo(id);
};

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};
