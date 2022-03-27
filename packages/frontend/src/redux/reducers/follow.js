import { STORE_FOLLOWERS } from "../actions/follower";

const follow = (state = [], action) => {
  switch (action.type) {
    case STORE_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
};

export default follow;
