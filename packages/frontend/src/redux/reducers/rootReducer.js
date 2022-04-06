import { combineReducers } from 'redux';
import follow from './follow';
import posts, { feed } from './post';
import user from './user';

const rootReducer = combineReducers({
  user,
  posts,
  followData: follow,
  feed,
});

export default rootReducer;
