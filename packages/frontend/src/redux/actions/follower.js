export const GET_FOLLOW_DATA_DB = "GET_FOLLOW_DATA_DB";
export const STORE_FOLLOW_DATA = "STORE_FOLLOW_DATA";

export const getFollowData = user_id => {
  return {
    type: GET_FOLLOW_DATA_DB,
    payload: user_id
  };
};

// !Dispatched by saga
export const storeFollowData = followData => {
  return {
    type: STORE_FOLLOW_DATA,
    payload: followData
  };
};
