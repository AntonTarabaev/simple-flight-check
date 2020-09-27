import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';

const FlightsScroll = ({ children }) => {
  const renderThumb = (props) => <div {...props} className="scrollbar__thumb" />;
  const renderTrack = (props) => <div {...props} className="scrollbar__track" />;

  return (
    <div className="scrollbar">
      <Scrollbars
        autoHeight
        autoHeightMax={515}
        renderTrackVertical={renderTrack}
        renderThumbVertical={renderThumb}>
        {children}
      </Scrollbars>
    </div>
  );
};

FlightsScroll.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default FlightsScroll;
