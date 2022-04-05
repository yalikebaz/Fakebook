import "./Connections.css";
import { NavLink } from "react-router-dom";
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
            <NavLink
              key={i}
              to={`/connect/${follower.id}`}
              className="connection"
            >
              {follower.name}
            </NavLink>
          ))}
      </section>
      <section className="cardContainer">
        <h2>Followers</h2>
        {followers &&
          followers.map((follower, i) => (
            <NavLink
              key={i}
              to={`/connect/${follower.id}`}
              className="connection"
            >
              {follower.name}
            </NavLink>
          ))}
      </section>
    </div>
  );
};

export default Connections;
