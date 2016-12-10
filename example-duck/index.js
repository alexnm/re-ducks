/* INDEX FILE

This file behaves as the duck file form the original proposal

*/

import reducer from "./reducers";

export { default as duckSelectors } from "./selectors";
export { default as duckOperations } from "./operations";
export { default as duckActions } from "./actions";
export { default as duckTypes } from "./types";

export default reducer;