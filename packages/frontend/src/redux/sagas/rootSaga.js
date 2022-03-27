import { all } from "redux-saga/effects";
import { getUserFollowData } from "./follower";
import { addPost, deletePost, editPost, watchGetPosts } from "./posts";
import watchUser from "./user";

function* rootSaga() {
  yield all([
    watchUser(),
    watchGetPosts(),
    addPost(),
    deletePost(),
    editPost(),
    getUserFollowData()
  ]);
}

export default rootSaga;
