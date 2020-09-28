import { UserActionTypes } from '../constants/action-types';

const initialState = {
  userData: null,
  favoriteFlights: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER_DATA:
      localStorage.setItem('userData', action.payload);

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

      const favoritesForLocalStore = newFavorites.join('&@&');
      localStorage.setItem('favoriteFlights', favoritesForLocalStore);

      return {
        ...state,
        favoriteFlights: newFavorites,
      };

    case UserActionTypes.CHECK_AUTH:
      const userData = localStorage.getItem('userData');

      if (userData) {
        let favoriteFlights = localStorage.getItem('favoriteFlights');

        if (favoriteFlights) {
          favoriteFlights = favoriteFlights.split('&@&');
        } else {
          favoriteFlights = [];
        }

        return {
          ...state,
          userData,
          favoriteFlights,
        };
      }
      return state;

    case UserActionTypes.LOGOUT:
      localStorage.clear();
      return initialState;

    default:
      return state;
  }
};

export default user;
