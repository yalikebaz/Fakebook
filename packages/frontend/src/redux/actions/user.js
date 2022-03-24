export const CHECK_USER_DB = "CHECK_USER_DB";
export const STORE_USER = "STORE_USER";

export const checkUser = userData => {
  return {
    type: CHECK_USER_DB,
    payload: userData
  };
};

export const storeUser = userData => {
  return {
    type: STORE_USER,
    payload: userData
  };
};
