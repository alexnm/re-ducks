import { connect } from "react-redux";
import { todosOperations } from "../../state/ducks/todos";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(todosOperations.setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
