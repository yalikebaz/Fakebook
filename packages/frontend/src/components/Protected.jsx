import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Navigate } from 'react-router-dom';

function Protected({ children }) {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
  return <Navigate to="/" />;
}

export default Protected;
