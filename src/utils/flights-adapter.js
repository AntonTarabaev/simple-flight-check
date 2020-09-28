const parseFlight = (flight) => {
  return {
    id: flight['id'],
    airportFrom: flight['flyFrom'],
    airportTo: flight['flyTo'],
    cityFrom: flight['cityFrom'],
    cityTo: flight['cityTo'],
    departureTime: flight['local_departure'],
    airlines: flight['airlines'],
    cost: flight['conversion']['RUB'],
  };
};

export const parseFlights = (flights) => {
  return flights.map(parseFlight);
};
