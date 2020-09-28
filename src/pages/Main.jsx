import React from 'react';
import PromoSlider from '../components/PromoSlider';
import FlightsScroll from '../components/FlightsScroll';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import { MOCK } from '../constants/main';
import FlightItem from '../components/FlightItem';
import { useSelector } from 'react-redux';
import { declOfNum } from '../utils/main';

registerLocale('ru', ru);

class CalendarBtn extends React.PureComponent {
  render() {
    const { onClick, value } = this.props;

    return (
      <button className="departure__calendar-btn" type="button" onClick={onClick}>
        {value}
      </button>
    );
  }
}

const Main = () => {
  const favoritesCount = useSelector(({ user }) => user.favoriteFlights.length);
  const promoPicsLinks = useSelector(({ data }) => data.promo);

  const [selectedDate, selectDate] = React.useState(new Date());

  return (
    <article className="departure">
      <h1 className="visually-hidden">Simple Flight Check app</h1>
      <div className="departure__head">
        <h2 className="departure__title alt-font">
          Вылеты <span className="departure__direction">SVO - JFK</span>
        </h2>
        <div className="departure__calendar-block">
          <DatePicker
            dateFormat="dd MMMM yyyy"
            locale="ru"
            selected={selectedDate}
            onChange={(date) => {
              console.log(date);
              selectDate(date);
            }}
            minDate={new Date()}
            customInput={<CalendarBtn />}
          />
        </div>
      </div>
      <PromoSlider>
        {promoPicsLinks.map((it) => (
          <img width="164" height="149" key={it + Math.random()} src={it} alt="Promo" />
        ))}
      </PromoSlider>
      <p className="departure__favorite">
        Добавлено в Избранное: <span className="departure__favorite-count">{favoritesCount}</span>
        {` ${declOfNum(favoritesCount, ['рейс', 'рейса', 'рейсов'])}`}
      </p>
      <FlightsScroll>
        {MOCK.map((it) => (
          <FlightItem key={it + Math.random()} id={it} />
        ))}
      </FlightsScroll>
    </article>
  );
};

export default Main;
