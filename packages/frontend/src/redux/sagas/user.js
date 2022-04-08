import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { CHECK_USER_DB, storeUser } from '../actions/user';
import store from '../../index';

function* checkUserDB(action) {
  try {
    const userInStore = store.getState().user.sub;

    // If user in store already... don't update store and don't make API call
    if (userInStore) {
      return;
    }

    // If user isn't in store already, make the API call
    const firstName = action.payload.nickname.charAt(0).toUpperCase()
      + action.payload.nickname.slice(1);

    yield call(axios.post, `${process.env.REACT_APP_HOST}/login`, {
      id: action.payload.sub,
      name: action.payload.nickname,
    });

    // If user isnt in store already, add them
    // This avoids redundantly updating the store (e.g. on user navigation to other tabs)
    yield put(storeUser({ ...action.payload, nickname: firstName }));
  } catch (error) {
    throw new Error();
  }
}

function* watchUser() {
  yield takeLatest(CHECK_USER_DB, checkUserDB);
}

export default watchUser;
