import { LoadedStatus } from '../constants/main';

const initialState = {
  flights: [],
  loadedStatus: LoadedStatus.NEVER,
};

const data = (state = initialState, action) => {
  return state;
};

export default data;
