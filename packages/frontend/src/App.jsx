import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Timeline from './pages/Timeline/Timeline';
import Container from './components/Container/Container';
import { checkUser } from './redux/actions/user';
import { getPosts } from './redux/actions/post';
import Protected from './components/Protected';
import Connect from './pages/Connect/Connect';
import UserProfile from './pages/UserProfile/UserProfile';
import { getFollowData } from './redux/actions/follower';

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useDispatch();
  const { sub } = useSelector((state) => state.user);

  // Retrieve/store user, post & follow details at the top level
  useEffect(() => {
    console.log('user', user)
    console.log('isAuthenticated', isAuthenticated)
    if (user && !isLoading) {
      dispatch(checkUser(user));
      dispatch(getPosts(user.sub));
      dispatch(getFollowData(user.sub));
    }
  }, [dispatch, user, isLoading]);

  if (isAuthenticated && !sub) {
    return (
      <div className="container">
        <div className="lds-dual-ring" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Container>
        <Routes>
          {!isAuthenticated && (
          <Route path="/index.html" element={<Navigate replace to="/" />} />
          )}

          {isAuthenticated && (
          <Route path="/index.html" element={<Navigate replace to="/timeline" />} />
          )}

          {isAuthenticated && (
          <Route path="/" element={<Navigate replace to="/timeline" />} />
          )}

          <Route path="/" element={<Login />} />
          <Route
            path="/timeline"
            element={(
              <Protected>
                <Timeline />
              </Protected>
              )}
          />
          <Route
            path="/profile"
            element={(
              <Protected>
                <Profile />
              </Protected>
              )}
          />
          <Route
            path="/connect"
            element={(
              <Protected>
                <Connect />
              </Protected>
              )}
          />
          <Route
            path="/connect/:user_name/:user_id"
            element={(
              <Protected>
                <UserProfile />
              </Protected>
              )}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
