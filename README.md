#re-ducks (WORK IN PROGRESS)

The original proposal for the [ducks modular approach](https://github.com/erikras/ducks-modular-redux) in building redux apps is really powerful, but as I started using the approach I noticed that the single duck files become harder and harder to maintain and read. So I want to propose an extended approach that works great in my opinion for medium-large scale codebases.

## The duck rules
A duck:
* MUST `export default` a function called `reducer()`
* MUST `export` its action creators as functions
* MUST have action types in the form `npm-module-or-app/reducer/ACTION_TYPE`
* MAY export its action types as `UPPER_SNAKE_CASE`, if an external reducer needs to listen for them, or if it is a published reusable library

## The extended approach
tl;dr - here's how a `duck` folder would look like:
```
duck/
├── actions.js
├── index.js
├── operations.js
├── reducers.js
├── selectors.js
├── tests.js
├── types.js
├── utils.js
```

### General rules
A duck folder:
* MUST have an index.js file that exports according to the original duck rules.
* MUST keep code with similar purpose in the same file (reducers, selectors, actions, etc.)
* MUST contain the tests related to the duck

This structure does not require any libraries or abstractions other than `redux` and `redux-thunk` at a minimum (but can work with `redux-saga` or `redux-observables`)

### Types
Let's start from defining the constants we will use as redux action types. In order to keep the naming simple, let's call the file `types.js`, because `constants.js` is a bit too generic.
The types are defined and exported as named exports
```
code
```

### Actions

### Operations

### Reducers

### Selectors

### Utils

### Tests

### A word on abstractions!
While working a good 2 years now in the React ecosystem, I found that abstractions are good when you design them and are your enemies when you take them from others. So while I understand the idea of reducing boilerplate, writing less code, reusing structures, keep in mind that any abstraction that you take for granted will eventually become a burden for the project.
