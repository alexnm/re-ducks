/* SELECTOR FUNCTIONS

These are pure functions that get the app state as a parameter and return some data from it, needed in the components.
Together with the operations, the selectors are part of the public interface of the 'duck'.
These functions make sense when you have a more complex app state.

*/

function checkIfDuckIsInRange( state ) {
    return state.duck.distance > 1000;
}

export {
    checkIfDuckIsInRange
};

