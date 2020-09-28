import { UserActionTypes } from '../constants/action-types';

export const setUserData = (userData = null) => ({
  type: UserActionTypes.SET_USER_DATA,
  payload: userData,
});

export const saveFavorite = (flightId) => ({
  type: UserActionTypes.SAVE_FAVORITE,
  payload: flightId,
});
