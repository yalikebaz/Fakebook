import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET_FOLLOW_DATA_DB, storeFollowData } from "../actions/follower";

function* getAllUserFollowData(action) {
  let following;
  let followers;
  try {
    following = yield call(
      axios.get,
      `http://localhost:3001/follow/${action.payload}/following`
    );
    followers = yield call(
      axios.get,
      `http://localhost:3001/follow/${action.payload}/followers`
    );
  } catch (error) {
    console.log(error);
  }
  const followData = {
    following: following.data,
    followers: followers.data
  };
  yield put(storeFollowData(followData));
}
export function* getUserFollowData() {
  yield takeLatest(GET_FOLLOW_DATA_DB, getAllUserFollowData);
}
