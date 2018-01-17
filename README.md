# Building on the duck legacy
Before starting, read more about the original [ducks modular approach proposal](https://github.com/erikras/ducks-modular-redux). When trying to embrace this idea in medium-large scale codebases I noticed that the single duck file becomes harder and harder to maintain and read.

So I want to propose an extended approach that works great when you go beyond a todo-app.

To recap, a duck:
* MUST `export default` a function called `reducer()`
* MUST `export` its action creators as functions
* MUST have action types in the form `npm-module-or-app/reducer/ACTION_TYPE`
* MAY export its action types as `UPPER_SNAKE_CASE`, if an external reducer needs to listen for them, or if it is a published reusable library

## Enter re-ducks
Instead of duck files, we use duck folders.

Here's how a **duck** folder would look like:
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
NOTE: Each concept from your app will have a similar folder.

## Codebase examples
[React/Redux ecommerce example](https://github.com/FortechRomania/react-redux-complete-example) - WIP

[React/Redux TodoApp + Flow](https://github.com/jthegedus/re-ducks-examples)

## General rules for a duck folder
A duck folder:
* MUST contain the **entire logic** for handling **only ONE** concept in your app, ex: product, cart, session, etc.
* MUST have an `index.js` file that exports according to the original duck rules.
* MUST keep code with similar purpose in the same file, ex: reducers, selectors, actions, etc.
* MUST contain the **tests** related to the duck.

This structure does not require any libraries or abstractions other than `redux` and `redux-thunk` at a minimum (but can work with `redux-saga` or `redux-observables`)

NOTE: I'm using `export default` in most of the cases, don't want to get into details there, you can compose your module as you wish.

### Types
Let's start from defining the constants we will use as redux action types. In order to keep the naming simple, let's call the file `types.js`, because `constants.js` is a bit too generic.

Our examples will model a real duck.
```javascript
const QUACK = "app/duck/QUACK";
const SWIM = "app/duck/SWIM";

export {
    QUACK,
    SWIM
};
```

### Actions
It's important to be consistent when defining actions, so let's always export functions from this file, we don't care if the action needs any input from the outside to build the payload or not.
```javascript
import * as types from "./types";

const quack = ( ) => ( {
    type: types.QUACK
} );

const swim = ( distance ) => ( {
    type: types.SWIM,
    payload: {
        distance
    }
} );

export {
    swim,
    quack
};
```
NOTE: Trying to impose a bit of structure to the actions object, the `type/payload` approach is pretty popular.

### Operations
In a simple application, you can easily dispatch simple actions and use the reducers to manage the state. However, in a more complex app you need to use some sort of middleware to handle more complex interactions. In our case, we use [redux-thunk](https://github.com/gaearon/redux-thunk).

The operations file define the `interface` for our duck. You can reason about it like this: 1 operation = X actions dispatched. This makes each operation function either **a thunk** in case it needs to dispatch multiple actions, or simply **a link** to an action already defined in `actions.js`.

This separation should work with whatever middleware/lib you are using for handling chained/linked/delayed operations.
```javascript
import * as actions from "./actions";

// This is a link to an action defined in actions.js.
const simpleQuack = actions.quack;

// This is a thunk which dispatches multiple actions from actions.js
const complexQuack = ( distance ) => ( dispatch ) => {
    dispatch( actions.quack( ) ).then( ( ) => {
        dispatch( actions.swim( distance ) );
        dispatch( /* any action */ );
    } );
}

export {
    simpleQuack,
    complexQuack
};
```
NOTE: [redux-observables](https://github.com/redux-observable/redux-observable) uses the idea of `epics` which I also like. Feel free to suggest names for this file by dropping a line on **[twitter](https://twitter.com/alexnmoldovan)**.

### Reducers
It's a good practice to keep your **state shape** in a comment above the reducers, just to have an overview.

In case the state shape is more complex, you should break the reducers into multiple smaller functions that deal with a slice of the state, then combine them at the end.
```javascript
import { combineReducers } from "redux";
import * as types from "./types";

/* State Shape
{
    quacking: bool,
    distance: number
}
*/

const quackReducer = ( state = false, action ) => {
    switch( action.type ) {
        case types.QUACK: return true;
        /* ... */
        default: return state;
    }
}

const distanceReducer = ( state = 0, action ) => {
    switch( action.type ) {
        case types.SWIM: return state + action.payload.distance;
        /* ... */
        default: return state;
    }
}

const reducer = combineReducers( {
    quacking: quackReducer,
    distance: distanceReducer
} );

export default reducer;
```
NOTE: Let's keep it simple for now with `switch` statements and abstract later.

### Selectors
In case your state shape is more complex you need selectors in order to map parts of the `state` to your `props` or in order to derive some data for your components from the current state.

These are the functions like: `getVisibleTodos`, `isUserAuthenticated`, etc. that take the current app state and return some derived data.
```javascript
function checkIfDuckIsInRange( duck ) {
    return duck.distance > 1000;
}

export {
    checkIfDuckIsInRange
};
```
NOTE: Selector functions will be used outside the duck folder, so they are part of the **interface** of the duck.

### Index
This file, from a module perspective, behaves as the duck file from the original proposal.
* It exports, as default, the reducer function of the duck.
* It exports, as named export, the selectors and the operations.
* Optionally, it exports the types if they are needed in other ducks.
```javascript
import reducer from "./reducers";

import * as duckSelectors from "./selectors";
import * as duckOperations from "./operations";
import * as duckTypes from "./types";

export {
    duckSelectors,
    duckOperations,
    duckTypes
};

export default reducer;
```

### Tests
One of the main advantages of `redux` is that you can easily do unit tests for your `reducers`, `action creators` and `selectors`. And with a small effort, you can do the same for the `operations`.

Ultimately, the split proposed here also helps you see what you need to test inside each duck. This example is using `mocha` and `expect.js`.
```javascript
import expect from "expect.js";
import reducer from "./reducers";
import * as actions from "./actions";

describe( "duck reducer", function( ) {
    describe( "quack", function( ) {
        const quack = actions.quack( );
        const initialState = false;

        const result = reducer( initialState, quack );

        it( "should quack", function( ) {
            expect( result ).to.be( true ) ;
        } );
    } );
} );
```

### A word on abstractions!
I've been working almost 2 years now in the React ecosystem and I found that abstractions are good when you design them for your specific needs and are your worst enemies when you use them blindly. So while I understand the idea of reducing boilerplate, writing less code, reusing structures, keep in mind that any abstraction that you take for granted will eventually become a burden for your project.

What I like about the `ducks approach` is that it does not enforce any abstraction on you. It's simply a better way of organizing your app. You have the complete freedom to build your own helper functions or use utility packages that have those functions.

=======================================

Read more about [the reasoning behind re-ducks](https://medium.com/@alexnm/scaling-your-redux-app-with-ducks-6115955638be#.4ppptx7oq)

Hope you find something useful in this! Ping me on [twitter](https://twitter.com/alexnmoldovan), i'd be more than happy to hear your thoughts!

Alex M
