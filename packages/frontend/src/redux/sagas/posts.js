import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { store } from "../../App";
import { ADD_POST, GET_POSTS, storePosts } from "../actions/post";

// Getting posts from DB, and then dispatching action to store in redux store
function* getUserPosts(action) {
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

export function* getPosts() {
  yield takeLatest(GET_POSTS, getUserPosts);
}

// Adding post to DB
function* addUserPost(action) {
  try {
    const userId = store.getState().loggedInUser.sub;
    const response = yield call(
      axios.post,
      `http://localhost:3001/posts/${userId}`,
      {
        title: action.payload.title,
        body: action.payload.body
      }
    );
    console.log("response from saga", response);
    // yield put(storePosts(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* addPost() {
  yield takeLatest(ADD_POST, addUserPost);
}
