import { STORE_FOLLOW_DATA } from '../actions/follower';

const follow = (state = [], action) => {
  switch (action.type) {
    case STORE_FOLLOW_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default follow;
