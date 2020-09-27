import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const PromoSlider = ({ children }) => {
  const sliderRef = React.useRef();

  const settings = {
    arrows: false,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
  };

  const onSliderScroll = (evt) => {
    if (evt.deltaY < 0) {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  const preventDefault = (evt) => evt.preventDefault();

  const onSliderMouseEnter = () => {
    document.body.addEventListener('wheel', preventDefault, { passive: false });
  };

  const onSliderMouseLeave = () => {
    document.body.removeEventListener('wheel', preventDefault);
  };

  return (
    <div
      onWheel={onSliderScroll}
      onMouseEnter={onSliderMouseEnter}
      onMouseLeave={onSliderMouseLeave}
      className="slider">
      <Slider {...settings} ref={sliderRef}>
        {children.map((it) => (
          <div key={new Date() + Math.random()} className="slider__item">
            {it}
          </div>
        ))}
      </Slider>
    </div>
  );
};

PromoSlider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PromoSlider;
