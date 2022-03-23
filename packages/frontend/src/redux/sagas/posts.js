import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET_POSTS, storePosts } from "../actions/post";

function* getUserPosts(action) {
  try {
    const response = yield call(
      axios.get,
      `http://localhost:3001/posts/${action.payload}`
    );

    console.log("response from saga", response);
    yield put(storePosts(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* getPosts() {
  yield takeLatest(GET_POSTS, getUserPosts);
}

export default getPosts;
