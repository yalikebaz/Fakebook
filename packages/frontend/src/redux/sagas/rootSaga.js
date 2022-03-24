import { all } from "redux-saga/effects";
import { addPost, deletePost, watchGetPosts } from "./posts";
import watchUser from "./user";

function* rootSaga() {
  yield all([watchUser(), watchGetPosts(), addPost(), deletePost()]);
}

export default rootSaga;
