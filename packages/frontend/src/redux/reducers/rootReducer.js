import { combineReducers } from "redux";
import test from "./test";

const rootReducer = combineReducers({
  countValue: test
});

export default rootReducer;
