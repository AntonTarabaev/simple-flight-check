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

    default:
      return state;
  }
};

export default user;
