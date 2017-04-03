// @flow
// external imports
import React from "react";
import { connect } from "react-redux";
import type { Connector } from "react-redux";
// operations & types
import { todosOperations } from "../../state/ducks/todos";
import todosTypes from "../../state/ducks/todos";

type Props = {
  dispatch: todosTypes.Dispatch
};

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(todosOperations.addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

const connector: Connector<{}, Props> = connect();

export default connector(AddTodo);
