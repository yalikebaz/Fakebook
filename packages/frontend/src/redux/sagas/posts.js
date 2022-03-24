import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { store } from "../../App";
import {
  ADD_NEW_POST,
  GET_POSTS,
  storeNewPost,
  storePosts
} from "../actions/post";

// Getting posts from DB, and then dispatching action to store in redux store
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

export function* getPosts() {
  yield takeLatest(GET_POSTS, getAllUserPosts);
}

// Adding a new user post to DB
function* addNewUserPost(action) {
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
    yield put(storeNewPost(response.data.post_data));
  } catch (error) {
    console.log(error);
  }
}

export function* addPost() {
  yield takeLatest(ADD_NEW_POST, addNewUserPost);
}
