/* ACTION CREATOR FUNCTIONS

Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects

*/

import * as actionTypes from "./action-types";

const quack = ( ) => ( {
    type: actionTypes.QUACK
} );

const swim = ( distance ) => ( {
    type: actionTypes.SWIM,
    payload: {
        distance
    }
} );

export {
    swim,
    quack
};
