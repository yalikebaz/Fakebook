import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Timeline from "./pages/Timeline/Timeline";
import Container from "./components/Container/Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUser } from "./redux/actions/user";
import { useAuth0 } from "@auth0/auth0-react";
import { getPosts } from "./redux/actions/post";
import Protected from "./components/Protected";
import Connect from "./pages/Connect/Connect";

function App() {
  const { isLoading, user } = useAuth0();
  const dispatch = useDispatch();

  // Retrieve/store user & post details at the top level
  useEffect(() => {
    if (user && !isLoading) {
      dispatch(checkUser(user));
      dispatch(getPosts(user.sub));
    }
  }, [dispatch, user, isLoading]);

  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/timeline"
              element={
                <Protected>
                  <Timeline />
                </Protected>
              }
            />
            <Route
              path="/profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
            <Route
              path="/connect"
              element={
                <Protected>
                  <Connect />
                </Protected>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
