export const CHECK_USER = "CHECK_USER";
export const STORE_USER = "STORE_USER";

export const checkUser = userData => {
  return {
    type: CHECK_USER,
    payload: userData
  };
};

export const storeUser = userData => {
  return {
    type: STORE_USER,
    payload: userData
  };
};
