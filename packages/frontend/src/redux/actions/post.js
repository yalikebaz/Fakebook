export const ADD_NEW_POST = "ADD_NEW_POST";
export const GET_POSTS = "GET_POSTS";
export const STORE_POSTS = "STORE_POSTS";
export const STORE_NEW_POST = "STORE_NEW_POST";

// * Actions intercepted by saga to conduct side effects, use these!
export const getPosts = userId => {
  return {
    type: GET_POSTS,
    payload: userId
  };
};

export const addNewPost = postContents => {
  return {
    type: ADD_NEW_POST,
    payload: postContents
  };
};

// ! Actions dispatched by saga, don't dispatch these manually
export const storePosts = posts => {
  return {
    type: STORE_POSTS,
    payload: posts
  };
};

export const storeNewPost = postData => {
  return {
    type: STORE_NEW_POST,
    payload: postData
  };
};
