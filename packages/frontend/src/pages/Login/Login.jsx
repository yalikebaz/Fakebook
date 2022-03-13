import "./Login.css";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isLoading, loginWithRedirect } = useAuth0();

  if (isLoading)
    return (
      <div className="container">
        <div className="lds-dual-ring" />
      </div>
    );

  return (
    <>
      <h1>Welcome to Fakebook!</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </>
  );
};

export default Login;
