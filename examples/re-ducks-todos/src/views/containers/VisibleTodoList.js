import { connect } from "react-redux";
import { todosOperations, todosSelectors } from "../../state/ducks/todos";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todos: todosSelectors.getVisibleTodos(
    state.todosState.todos,
    state.todosState.visibilityFilter
  )
});

const mapDispatchToProps = {
  onTodoClick: todosOperations.toggleTodo
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
