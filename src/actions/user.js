import { UserActionTypes } from '../constants/action-types';

export const setUserData = (userData) => ({
  type: UserActionTypes.SET_USER_DATA,
  payload: userData,
});

export const saveFavorite = (flightId) => ({
  type: UserActionTypes.SAVE_FAVORITE,
  payload: flightId,
});

export const checkAuth = () => ({
  type: UserActionTypes.CHECK_AUTH,
});

export const logout = () => ({
  type: UserActionTypes.LOGOUT,
});
