import { MONTHS } from '../constants/main';
import airlines from 'airlines-iata-codes';

export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const formatDate = (d = new Date()) => {
  return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
    .map((n) => (n < 10 ? `0${n}` : `${n}`))
    .join('/');
};

export const formatDateForView = (date) => {
  const dateInfo = date.split('T')[0];
  const [year, month, day] = dateInfo.split('-');

  return `${day} ${MONTHS[Number(month) - 1]}, ${year}`;
};

export const formatTimeForView = (date) => date.split('T')[1].substr(0, 5);

export const formatAirlinesFroView = (data) =>
  data.map((it) => airlines.getAirlineName(it).split(',')[0]);
