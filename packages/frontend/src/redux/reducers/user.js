import { STORE_USER } from "../actions/user";

const initialState = [
  {
    id: "testid",
    name: "testname"
  }
];

const user = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default user;
