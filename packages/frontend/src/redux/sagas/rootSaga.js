import { all } from "redux-saga/effects";
import getPosts from "./posts";
import watchUser from "./user";

function* rootSaga() {
  yield all([watchUser(), getPosts()]);
}

export default rootSaga;
