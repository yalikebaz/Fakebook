import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET_POSTS_DB, storePosts } from "../actions/post";
import { GET_FOLLOWER_DB } from "../actions/follower";

//
function* getAllUserPosts(action) {
  try {
    const response = yield call(
      axios.get,
      `http://localhost:3001/posts/${action.payload}`
    );
    yield put(storePosts(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetPosts() {
  //   yield takeLatest(GET_FOLLOWER_DB, getAllUserFollowers);
}
