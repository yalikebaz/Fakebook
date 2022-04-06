export const ADD_NEW_POST_DB = 'ADD_NEW_POST_DB';
export const GET_POSTS_DB = 'GET_POSTS_DB';
export const STORE_POSTS = 'STORE_POSTS';
export const STORE_NEW_POST = 'STORE_NEW_POST';
export const DELETE_POST_DB = 'DELETE_POST_DB';
export const EDIT_POST_DB = 'EDIT_POST_DB';
export const GET_FEED_DB = 'GET_FEED_DB';
export const STORE_FEED = 'STORE_FEED';

// * Actions intercepted by saga to conduct side effects, use these!
export const getPosts = (userId) => ({
  type: GET_POSTS_DB,
  payload: userId,
});

export const addNewPost = (postContents) => ({
  type: ADD_NEW_POST_DB,
  payload: postContents,
});

export const deletePost = (id) => ({
  type: DELETE_POST_DB,
  payload: id,
});

export const editPost = (title, body, id) => ({
  type: EDIT_POST_DB,
  payload: { title, body, id },
});

export const getFeed = (user_id) => ({
  type: GET_FEED_DB,
  payload: user_id,
});

// ! Actions dispatched by saga, don't dispatch these manually. They usually update the store.
export const storePosts = (posts) => ({
  type: STORE_POSTS,
  payload: posts,
});

export const storeNewPost = (postData) => ({
  type: STORE_NEW_POST,
  payload: postData,
});

export const storeFeed = (posts) => ({
  type: STORE_FEED,
  payload: posts,
});
