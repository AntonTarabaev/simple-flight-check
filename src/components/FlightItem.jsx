import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { saveFavorite } from '../actions/user';

const FlightItem = ({ id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(({ user }) => user.favoriteFlights.includes(id));

  const onFavoriteClick = () => {
    dispatch(saveFavorite(id));
  };

  return (
    <article className="flight-item">
      <div className="flight-item__left">
        <h3 className="flight-item__path">
          <span className="flight-item__departure">Moscow (SVO)</span>
          <span className="flight-item__arrival">New York City (JFK)</span>
        </h3>
        <p className="flight-item__date">
          28 June, 2020
          <span className="flight-item__time">14:50</span>
        </p>
        <span className="flight-item__carrier">Aeroflot</span>
      </div>
      <div className="flight-item__right">
        <button
          className={`flight-item__favorite ${isFavorite && `flight-item__favorite--active`}`}
          onClick={onFavoriteClick}>
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133V2.59133Z"
              stroke="#878787"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="flight-item__price">
          Price: <span className="flight-item__cost">23 924 ₽</span>
        </p>
      </div>
    </article>
  );
};

FlightItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FlightItem;
