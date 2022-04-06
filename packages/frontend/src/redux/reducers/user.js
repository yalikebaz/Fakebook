import { STORE_USER } from '../actions/user';

const initialState = {
  nickname: '',
  name: '',
  picture: '',
  updated_at: '',
  email: '',
  email_verified: false,
  sub: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default user;
