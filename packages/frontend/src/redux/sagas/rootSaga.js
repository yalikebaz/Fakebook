import { all } from 'redux-saga/effects';
import { getUserFollowData } from './follower';
import {
  addPost, deletePost, editPost, getFeed, watchGetPosts,
} from './posts';
import watchUser from './user';

function* rootSaga() {
  yield all([
    watchUser(),
    watchGetPosts(),
    addPost(),
    deletePost(),
    editPost(),
    getUserFollowData(),
    getFeed(),
  ]);
}

export default rootSaga;
