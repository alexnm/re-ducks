import { combineReducers } from "redux";
import CONSTANTS from "./constants";
import types from "./types";
/* State shape
state: {
  todos: [],
  visibilityFilter: SHOW_ALL
}
*/

// this method can be confusing because it serves two purposes:
// 1 - it create a new todo
// 2 - it toggles the completed state of an existing todo
const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case types.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, todo(undefined, action)];
    case types.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = CONSTANTS.SHOW_ALL, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  todos,
  visibilityFilter
});

export default todosReducer;
