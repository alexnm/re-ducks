import CONSTANTS from "./constants";

const getVisibleTodos = (todos, filter) => {
  console.log(todos);
  console.log(filter);
  switch (filter) {
    case CONSTANTS.SHOW_ALL:
      return todos;
    case CONSTANTS.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case CONSTANTS.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default {
  getVisibleTodos
};
