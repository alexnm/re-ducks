// @flow
// external imports
import { connect } from "react-redux";
import type { Connector } from "react-redux";
// operations & types
import { todosOperations } from "../../state/ducks/todos";
import todosTypes from "../../state/ducks/todos";
// containers & components
import Link from "../components/Link";
import type { Props } from "../components/Link";

type OwnProps = {
  filter: todosTypes.VisibilityFilter
};

const mapStateToProps = (state: todosTypes.todosState, ownProps) => {
  return {
    active: ownProps.filter === state.todosState.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch: todosTypes.Dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(todosOperations.setVisibilityFilter(ownProps.filter));
    }
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Link);
