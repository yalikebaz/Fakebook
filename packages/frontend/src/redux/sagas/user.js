import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { CHECK_USER_DB, storeUser } from "../actions/user";
import { store } from "../../index.js";

function* checkUserDB(action) {
  try {
    const userInStore = store.getState().loggedInUser;

    // If user in store already... don't update store and don't make API call
    if (userInStore) {
      return;
    }

    // If user isn't in store already, make the API call
    yield call(axios.post, "http://localhost:3001/login", {
      id: action.payload.sub,
      name: action.payload.nickname
    });

    // If user isnt in store already, add them
    // This avoids redundantly updating the store (e.g. on user navigation to other tabs)
    yield put(storeUser(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* watchUser() {
  yield takeLatest(CHECK_USER_DB, checkUserDB);
}

export default watchUser;
