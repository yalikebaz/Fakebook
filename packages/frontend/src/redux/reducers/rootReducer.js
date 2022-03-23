import { combineReducers } from "redux";
import posts from "./post";
import test from "./test";
import user from "./user";

const rootReducer = combineReducers({
  countValue: test,
  loggedInUser: user,
  posts: posts
});

export default rootReducer;
