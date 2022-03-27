import { combineReducers } from "redux";
import follow from "./follow";
import posts from "./post";
import test from "./test";
import user from "./user";

const rootReducer = combineReducers({
  countValue: test,
  user: user,
  posts: posts,
  followData: follow
});

export default rootReducer;
