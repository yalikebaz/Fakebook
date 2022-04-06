export const CHECK_USER_DB = 'CHECK_USER_DB';
export const STORE_USER = 'STORE_USER';

export const checkUser = (userData) => ({
  type: CHECK_USER_DB,
  payload: userData,
});

export const storeUser = (userData) => ({
  type: STORE_USER,
  payload: userData,
});
