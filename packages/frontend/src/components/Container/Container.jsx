import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import './Container.css';

function Container({ children }) {
  const { isLoading, isAuthenticated } = useAuth0();
  const user = useSelector((state) => state.user);

  if (isLoading || !user) {
    return (
      <div className="container">
        <div className="lds-dual-ring" />
      </div>
    );
  }
  return (
    <>
      {isAuthenticated && <Nav />}
      <div className="content">{children}</div>
    </>
  );
}
export default Container;
