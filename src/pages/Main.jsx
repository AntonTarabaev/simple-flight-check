import React from 'react';
import PromoSlider from '../components/PromoSlider';
import FlightsScroll from '../components/FlightsScroll';
import 'react-datepicker/dist/react-datepicker.css';
import FlightItem from '../components/FlightItem';
import { useDispatch, useSelector } from 'react-redux';
import { declOfNum } from '../utils/main';
import { loadData, setFlights, setLoadedStatus } from '../actions/data';
import Loader from '../components/Loader';
import { LoadedStatus } from '../constants/main';
import ServerError from '../components/ServerError';
import FlightDatePicker from '../components/FlightDatePicker';

const Main = () => {
  const favoritesCount = useSelector(({ user }) => user.favoriteFlights.length);
  const flights = useSelector(({ data }) => data.flights);
  const loadingStatus = useSelector(({ data }) => data.loadedStatus);

  const tomorrowDate = new Date();
  tomorrowDate.setDate(new Date().getDate() + 1);

  const dispatch = useDispatch();
  const [selectedDate, selectDate] = React.useState(tomorrowDate);

  const onCalendarClick = React.useCallback((date) => {
    selectDate(date);
  }, []);

  React.useEffect(() => {
    dispatch(setLoadedStatus(LoadedStatus.LOADING));
    dispatch(loadData(selectedDate));
  }, [dispatch, selectedDate]);

  React.useEffect(() => {
    return () => {
      dispatch(setFlights());
      dispatch(setLoadedStatus(LoadedStatus.NEVER));
    };
  }, [dispatch]);

  return (
    <article className="departure">
      <h1 className="visually-hidden">Simple Flight Check app</h1>
      <div className="departure__head">
        <h2 className="departure__title alt-font">
          Вылеты <span className="departure__direction">SVO - JFK</span>
        </h2>
        <div className="departure__calendar-block">
          <FlightDatePicker onCalendarClick={onCalendarClick} selectedDate={selectedDate} />
        </div>
      </div>
      <PromoSlider />
      {(loadingStatus === LoadedStatus.NEVER || loadingStatus === LoadedStatus.LOADING) && (
        <Loader />
      )}
      {loadingStatus === LoadedStatus.LOADED && (
        <>
          <p className="departure__favorite">
            Добавлено в Избранное:{' '}
            <span className="departure__favorite-count">{favoritesCount}</span>
            {` ${declOfNum(favoritesCount, ['рейс', 'рейса', 'рейсов'])}`}
          </p>
          <FlightsScroll>
            {flights.map((it, i) => (
              <FlightItem
                key={it.id + i}
                id={it.id}
                airportFrom={it.airportFrom}
                airportTo={it.airportTo}
                cityFrom={it.cityFrom}
                cityTo={it.cityTo}
                departureTime={it.departureTime}
                cost={it.cost}
                airlines={it.airlines}
              />
            ))}
          </FlightsScroll>
        </>
      )}
      {loadingStatus === LoadedStatus.ERROR && <ServerError />}
    </article>
  );
};

export default Main;
