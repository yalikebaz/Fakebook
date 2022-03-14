import { STORE_USER } from "../actions/user";

const user = (state = null, action) => {
  switch (action.type) {
    case STORE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default user;
