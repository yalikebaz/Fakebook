export const GET_FOLLOWER_DB = "GET_FOLLOWERS_DB";
export const STORE_FOLLOWERS = "STORE_FOLLOWERS";

export const getFollowers = user_id => {
  return {
    type: GET_FOLLOWER_DB,
    payload: user_id
  };
};

// !Dispatched by saga
export const storeFollowers = followers => {
  return {
    type: STORE_FOLLOWERS,
    payload: followers
  };
};
