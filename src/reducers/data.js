import { LoadedStatus, MOCK_PROMO_PICS_LINKS } from '../constants/main';
import { DataActionTypes } from '../constants/action-types';
import { parseFlights } from '../utils/flights-adapter';

const initialState = {
  flights: [],
  promo: MOCK_PROMO_PICS_LINKS,
  loadedStatus: LoadedStatus.NEVER,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case DataActionTypes.SET_FLIGHTS:
      return {
        ...state,
        flights: parseFlights(action.payload.data),
      };

    case DataActionTypes.SET_LOADED_STATUS:
      return {
        ...state,
        loadedStatus: action.payload,
      };

    default:
      return state;
  }
};

export default data;
