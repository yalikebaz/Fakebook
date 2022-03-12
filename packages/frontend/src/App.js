import { Provider } from "react-redux";
import "./App.css";
import { createStore } from "redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import rootReducer from "./redux/reducers/rootReducer";
import Profile from "./pages/Profile/Profile";
import Timeline from "./pages/Timeline/Timeline";
import Container from "./components/Container/Container";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/timeline" element={<Timeline />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
