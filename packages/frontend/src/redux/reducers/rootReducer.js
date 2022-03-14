import { combineReducers } from "redux";
import test from "./test";
import user from "./user";

const rootReducer = combineReducers({
  countValue: test,
  loggedInUser: user
});

export default rootReducer;
