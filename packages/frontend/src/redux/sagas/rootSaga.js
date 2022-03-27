import { all } from "redux-saga/effects";
import { getUserFollowers } from "./follower";
import { addPost, deletePost, editPost, watchGetPosts } from "./posts";
import watchUser from "./user";

function* rootSaga() {
  yield all([
    watchUser(),
    watchGetPosts(),
    addPost(),
    deletePost(),
    editPost(),
    getUserFollowers()
  ]);
}

export default rootSaga;
