import { DataActionTypes } from '../constants/action-types';

export const setFlights = (flights) => ({
  type: DataActionTypes.SET_FLIGHTS,
  payload: flights,
});

export const setLoadedStatus = (status) => ({
  type: DataActionTypes.SET_LOADED_STATUS,
  payload: status,
});

export const loadData = (data) => ({
  type: DataActionTypes.LOAD_DATA,
  payload: data,
});
