export const STORE_USER = "STORE_USER";

const user = userData => {
  return {
    type: STORE_USER,
    payload: userData
  };
};

export default user;
