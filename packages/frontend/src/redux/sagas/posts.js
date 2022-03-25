import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { store } from "../../App";
import {
  ADD_NEW_POST_DB,
  DELETE_POST_DB,
  EDIT_POST_DB,
  getPosts,
  GET_POSTS_DB,
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
export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_DB, getAllUserPosts);
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
  yield takeLatest(ADD_NEW_POST_DB, addNewUserPost);
}

// Deleting a post
function* deleteUserPost(action) {
  try {
    yield call(axios.delete, `http://localhost:3001/posts/${action.payload}`);
    const userId = store.getState().loggedInUser.sub;
    yield put(getPosts(userId));
  } catch (error) {
    console.log(error);
  }
}
export function* deletePost() {
  yield takeLatest(DELETE_POST_DB, deleteUserPost);
}

// Editing a post
function* editUserPost(action) {
  try {
    yield call(axios.put, `http://localhost:3001/posts/${action.payload.id}`, {
      title: action.payload.title,
      body: action.payload.body
    });
    const userId = store.getState().loggedInUser.sub;
    yield put(getPosts(userId));
  } catch (error) {
    console.log(error);
  }
}
export function* editPost() {
  yield takeLatest(EDIT_POST_DB, editUserPost);
}
