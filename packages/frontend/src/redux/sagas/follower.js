import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET_POSTS_DB, storePosts } from "../actions/post";
import { GET_FOLLOWER_DB, storeFollowers } from "../actions/follower";

//
function* getAllUserFollowers(action) {
  try {
    const response = yield call(
      axios.get,
      `http://localhost:3001/follow/${action.payload}`
    );
    yield put(storeFollowers(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* getUserFollowers() {
  yield takeLatest(GET_FOLLOWER_DB, getAllUserFollowers);
}
