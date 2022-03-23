export const ADD_POST = "ADD_POST";
export const GET_POSTS = "GET_POSTS";
export const STORE_POSTS = "STORE_POSTS";

export const post = postContents => {
  return {
    type: ADD_POST,
    payload: postContents
  };
};

export const getPosts = userId => {
  return {
    type: GET_POSTS,
    payload: userId
  };
};

export const storePosts = posts => {
  return {
    type: STORE_POSTS,
    payload: posts
  };
};
