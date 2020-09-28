import React from 'react';
import { registerLocale } from 'react-datepicker';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

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

const FlightDatePicker = ({ selectedDate, onCalendarClick }) => {
  return (
    <DatePicker
      dateFormat="dd MMMM yyyy"
      locale="ru"
      selected={selectedDate}
      onChange={onCalendarClick}
      minDate={new Date()}
      customInput={<CalendarBtn />}
    />
  );
};

export default React.memo(FlightDatePicker);
