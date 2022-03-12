import "./Login.css";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <div className="container">
      <div className="lds-dual-ring" />
    </div>
  );
};

export default Login;
