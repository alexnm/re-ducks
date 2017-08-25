/* ACTION CREATOR FUNCTIONS

Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects

*/

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
