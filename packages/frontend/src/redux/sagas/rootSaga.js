import { all } from "redux-saga/effects";
import { addPost, getPosts } from "./posts";
import watchUser from "./user";

function* rootSaga() {
  yield all([watchUser(), getPosts(), addPost()]);
}

export default rootSaga;
