import "./Connections.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowData } from "../../redux/actions/follower";

const Connections = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { following, followers } = useSelector(state => state.followData);

  useEffect(() => {
    if (user) {
      dispatch(getFollowData(user.sub));
    }
  }, [user, dispatch]);

  return (
    <div className="connectionPageContainer">
      <section className="cardContainer">
        <h2>Following</h2>
        {following &&
          following.map((follower, i) => (
            <a key={i} className="connection" href="/#/">
              {follower}
            </a>
          ))}
      </section>
      <section className="cardContainer">
        <h2>Followers</h2>
        {followers &&
          followers.map((follower, i) => (
            <a key={i} className="connection" href="/#/">
              {follower}
            </a>
          ))}
      </section>
    </div>
  );
};

export default Connections;
