// @flow
// external imports
import React from "react";
// operations, selectors & types
import todosTypes from "../../state/ducks/todos";

export type Props = {
  onClick: () => void,
  completed: boolean,
  text: todosTypes.Text
};

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

export default Todo;
