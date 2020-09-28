import { call, put, takeLatest } from 'redux-saga/effects';
import { setFlights, setLoadedStatus } from '../actions/data';
import { DataActionTypes } from '../constants/action-types';
import { LoadedStatus } from '../constants/main';
import { fetchData } from '../api';

function* fetchFlightsData({ payload }) {
  try {
    const flights = yield call(fetchData, payload);
    yield put(setFlights(flights));
    yield put(setLoadedStatus(LoadedStatus.LOADED));
  } catch (err) {
    yield put(setLoadedStatus(LoadedStatus.ERROR));
  }
}

export function* flightsSaga() {
  yield takeLatest(DataActionTypes.LOAD_DATA, fetchFlightsData);
}
