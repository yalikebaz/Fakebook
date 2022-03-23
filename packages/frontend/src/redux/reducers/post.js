import { ADD_POST, STORE_POSTS } from "../actions/post";

const posts = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case STORE_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default posts;
