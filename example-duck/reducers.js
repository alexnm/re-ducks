/* REDUCER(S)

It's a good practice to define your state shape first.
Based on the state shape, multiple reducers might be defined in this file, combined and exported into a single reducer function.

*/

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
