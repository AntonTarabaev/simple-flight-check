import axios from 'axios';
import { formatDate } from './utils/main';

const API_URL = 'https://tequila-api.kiwi.com/v2/search';
const API_KEY = '42EWNiG3UAXt4YNwrBNaGOwaAjORdtR5';

const configureRequest = (date, flyFrom = 'SVO', flyTo = 'JFK') => ({
  method: 'GET',
  url: API_URL,
  headers: {
    accept: 'application/json',
    apikey: API_KEY,
  },
  params: {
    fly_from: flyFrom,
    fly_to: flyTo,
    date_from: formatDate(date),
    date_to: formatDate(date),
    flight_type: 'oneway',
    adults: '1',
    selected_cabins: 'C',
    mix_with_cabins: 'M',
    curr: 'RUB',
    max_stopovers: '2',
    max_sector_stopovers: '2',
    vehicle_type: 'aircraft',
  },
});

export const fetchData = (date, flyFrom = 'SVO', flyTo = 'JFK') => {
  return axios(configureRequest(date, flyFrom, flyTo))
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};
