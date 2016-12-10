/* TESTS FILE

You can test here all the different parts of the duck.
Most obvious is to start with the reducer and selector functions which should be straight forward (pure functions)
Example is using mocha and expect.js, but you can use any testing lib/framework/runner

*/

import expect from "expect.js";
import reducer from "./reducers";
import actions from "./actions";

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
