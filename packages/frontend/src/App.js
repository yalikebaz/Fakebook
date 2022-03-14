import { Provider } from "react-redux";
import "./App.css";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas/rootSaga";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import rootReducer from "./redux/reducers/rootReducer";
import Profile from "./pages/Profile/Profile";
import Timeline from "./pages/Timeline/Timeline";
import Container from "./components/Container/Container";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
