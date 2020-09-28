import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

const PromoSlider = () => {
  const sliderRef = React.useRef();
  const promoPicsLinks = useSelector(({ data }) => data.promo);

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
        {promoPicsLinks.map((it, i) => (
          <div key={it + i} className="slider__item">
            <img width="164" height="149" src={it} alt="Promo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default React.memo(PromoSlider);
