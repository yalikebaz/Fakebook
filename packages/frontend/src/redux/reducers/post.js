import { STORE_FEED, STORE_NEW_POST, STORE_POSTS } from '../actions/post';

const posts = (state = [], action) => {
  switch (action.type) {
    case STORE_POSTS:
      return action.payload;
    case STORE_NEW_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const feed = (state = [], action) => {
  switch (action.type) {
    case STORE_FEED:
      return action.payload;
    default:
      return state;
  }
};

export default posts;
