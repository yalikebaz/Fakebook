import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../components/Button/Button";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

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
