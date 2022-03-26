export const GET_FOLLOWER_DB = "GET_FOLLOWERS_DB";

export const getFollowers = user_id => {
  return {
    type: GET_FOLLOWER_DB,
    payload: user_id
  };
};
