import './Connections.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

function Connections() {
  const { following, followers } = useSelector((state) => state.followData);

  return (
    <div className="connectionPageContainer">
      <section className="cardContainer">
        <h2>Following</h2>
        {following
          && following.map((follower, i) => (
            <NavLink
              key={i}
              to={`/connect/${follower.name}/${follower.id}`}
              className="connection"
            >
              {follower.name.charAt(0).toUpperCase() + follower.name.slice(1)}
            </NavLink>
          ))}
      </section>
      <section className="cardContainer">
        <h2>Followers</h2>
        {followers
          && followers.map((follower, i) => (
            <NavLink
              key={i}
              to={`/connect/${follower.name}/${follower.id}`}
              className="connection"
            >
              {follower.name.charAt(0).toUpperCase() + follower.name.slice(1)}
            </NavLink>
          ))}
      </section>
    </div>
  );
}

export default Connections;
