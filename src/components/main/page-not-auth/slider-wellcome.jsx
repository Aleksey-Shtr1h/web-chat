import React from 'react';
import Slider from 'react-slick';
import {useWindowSize} from '../../../utils/use-hooks/hooks.js';
import {sliderOptions} from '../../../constant.js';

export const SliderWellcome = () => {
  const [widthWindow] = useWindowSize();

  const nameSliderClass = widthWindow > 900 ? `slider-desktop` : `slider-table`;
  const nameSliderWrapClass = widthWindow > 900 ? `slider__wpapper-desktop` : `slider__wpapper-table`;

  const nameSliderItemWrapClass = widthWindow > 900 ? `slider__item-wrapper-desktop` : `slider__item-wrapper-table`;


  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={`slider ${nameSliderClass}`}>
      <div className={`slider__wpapper ${nameSliderWrapClass}`}>
        <Slider {...settings}>

          {sliderOptions.map((sliderOption, id) => {
            const {title, text, color, icon} = sliderOption;

            return (
              <div 
                className="slider__item" 
                key={sliderOption.title + id}
              >
                <div 
                  className={`slider__item-wrapper ${nameSliderItemWrapClass}`}
                  style={{backgroundColor: color}}
                > 
                  <div className="wraper-slider-content">
                    <i className={`fas ${icon}`}></i>
                    <h3 className="slider__title">{title}</h3>
                    <p className="slider__text">{text}</p>
                  </div>
                </div>
              </div>
            );

          })}

        </Slider>
      </div>
    </div>
  );

};