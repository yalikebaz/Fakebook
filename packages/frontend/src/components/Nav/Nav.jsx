import { NavLink } from 'react-router-dom';
import React from 'react';
import './Nav.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import fakebook from '../../assets/fakebook_white.png';
import Button from '../Button/Button';

function Nav() {
  const { logout } = useAuth0();
  const currentUser = useSelector((state) => state.user);

  return (
    <nav>
      <img className="fb" src={fakebook} alt="fakebook" />
      <NavLink
        to="/timeline"
        className={({ isActive }) => (isActive ? 'active ' : 'link')}
      >
        Timeline
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'active ' : 'link')}
      >
        Profile
      </NavLink>
      <NavLink
        to="/connect"
        className={({ isActive }) => (isActive ? 'active ' : 'link')}
      >
        Connect
      </NavLink>
      <div className="logoutContainer">
        <p>{`Logged in as ${currentUser?.nickname}`}</p>
        <div className="logout">
          <Button onClick={logout({ returnTo: `${window.location.origin}/` })}>Logout</Button>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
