import "./Login.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../components/Button/Button";

const Login = () => {
  const { isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div className="container">
        <div className="lds-dual-ring" />
      </div>
    );
  }

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <>
      <h1>Welcome to Fakebook!</h1>
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
};

export default Login;
