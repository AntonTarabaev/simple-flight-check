import { UserActionTypes } from '../constants/action-types';

const initialState = {
  userData: null,
  favoriteFlights: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    case UserActionTypes.SAVE_FAVORITE:
      const newFavorites = state.favoriteFlights.slice();
      const searchIndex = newFavorites.findIndex((it) => it === action.payload);

      if (searchIndex === -1) {
        newFavorites.push(action.payload);
      } else {
        newFavorites.splice(searchIndex, 1);
      }

      return {
        ...state,
        favoriteFlights: newFavorites,
      };

    default:
      return state;
  }
};

export default user;
