import { combineReducers } from "redux";
import { increase } from "./increase";
import { decrease } from "./decrease";

const reducer = combineReducers({
  increase: increase,
  decrease: decrease
});

export { reducer };
