// @flow
// external imports
import { connect } from "react-redux";
import type { Connector } from "react-redux";
// operations, selectors & types
import { todosOperations, todosSelectors } from "../../state/ducks/todos";
import todosTypes from "../../state/ducks/todos";
// containers & components
import TodoList from "../components/TodoList";
import type { Props } from "../components/TodoList";

const mapStateToProps = (state: todosTypes.todosState) => {
  return {
    todos: todosSelectors.getVisibleTodos(
      state.todosState.todos,
      state.todosState.visibilityFilter
    )
  };
};

const mapDispatchToProps = (dispatch: todosTypes.Dispatch) => {
  return {
    onTodoClick: id => {
      dispatch(todosOperations.toggleTodo(id));
    }
  };
};

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TodoList);
