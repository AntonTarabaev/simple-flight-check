import { LoadedStatus, MOCK_PROMO_PICS_LINKS } from '../constants/main';

const initialState = {
  flights: [],
  promo: MOCK_PROMO_PICS_LINKS,
  loadedStatus: LoadedStatus.NEVER,
};

const data = (state = initialState, action) => {
  return state;
};

export default data;
