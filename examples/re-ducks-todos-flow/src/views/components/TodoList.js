// @flow
// external imports
import React from "react";
// operations, selectors & types
import todosTypes from "../../state/ducks/todos";
// containers & components
import Todo from "./Todo";

export type Props = {
  todos: todosTypes.Todos,
  onTodoClick: (id: todosTypes.Id) => void
};

const TodoList = ({ todos, onTodoClick }: Props) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
