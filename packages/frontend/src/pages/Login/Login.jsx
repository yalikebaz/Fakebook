import React from 'react';
import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../../components/Button/Button';
import { ReactComponent as SplashIcon } from '../../assets/splash.svg';

function Login() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <section className="loginContainer">
      <section className="loginBlurb">
        <h1>Welcome to Fakebook!</h1>
        <p>
          This is a fullstack application trying to emulate popular
          social media sites, it's closer to Twitter to be honest!
        </p>
        <p>
          Take a look at the system design
          {' '}
          <a href="https://miro.com/app/board/uXjVOL6c7bA=/?invite_link_id=402942657406" target="__blank">here</a>
        </p>

        <p>
          To login, you can create an account on the next screen
          by pressing 'Sign up', or you can use this test credential:

        </p>
        <p>
          <strong>Username: </strong>
          john@john.com
        </p>
        <p>
          <strong>Password: </strong>
          john
        </p>
        <Button onClick={handleLogin}>Login</Button>
      </section>
      <SplashIcon />
    </section>
  );
}

export default Login;
