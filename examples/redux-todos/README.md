# Re-ducks Todos Example
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and is a translation of the [Redux Todos example](https://github.com/reactjs/redux/tree/master/examples/todos).

## Translatino changes to note
tldr; watch your state shape!

Since the ducks and re-ducks approaches use the combineReducer Redux method more the state shape changes from the original Redux Todos example.

### Redux Todos
```js
state {
  todos: [],
  visibilityFilter: "SHOW_ALL"
}
```
### Ducks/Re-ducks Todos
```js
state {
  todosState {
    todos: [],
    visibilityFilter: "SHOW_ALL"
  }
}
```

This is due to the fact that `/src/state/ducks/index.js` exports all the reducers from the feature folders. This is where the name of each feature's state is given.

Because of this state shape change, the selectors given to the `mapStateToProps` method must be changed to access the correct level of the state. For example, in the `VisibleTodoList` container.

```js
const mapStateToProps = state => ({
  todos: todosSelectors.getVisibleTodos(
    state.todosState.todos,
    state.todosState.visibilityFilter
  )
});
```
