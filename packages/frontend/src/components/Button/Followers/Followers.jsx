import { useEffect } from "react";
import "./Followers.css";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers } from "../../../redux/actions/follower";

const Followers = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const followers = useSelector(state => state.followers);

  useEffect(() => {
    if (user && !followers.length) {
      dispatch(getFollowers(user.sub));
    }
  }, [user, followers, dispatch]);

  return (
    <div className="followerContainer">
      <h2>Followers</h2>
      {followers.map((follower, i) => (
        <a key={i} className="follower" href="#">
          {follower}
        </a>
      ))}
    </div>
  );
};

export default Followers;
