import React from 'react';
import { sliderOptions } from '../../../constant';
import {
  SliderBox,
  SliderItem,
  SliderWrapper,
  SliderItemWrapper,
  SliderWrapperContent,
  SliderIcon,
  SliderTitle,
  SliderText,
  SliderEdit,
} from './slider-wellcome.styled';

interface SettingsSlider {
  dots: boolean;
  fade: boolean;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

export const SliderWellcome: React.FC = () => {
  const settings: SettingsSlider = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderBox>
      <SliderWrapper>
        <SliderEdit {...settings}>
          {sliderOptions.map((sliderOption, id) => {
            const { title, text, color, icon } = sliderOption;

            return (
              <SliderItem key={sliderOption.title + id}>
                <SliderItemWrapper color={color}>
                  <SliderWrapperContent>
                    <SliderIcon className={icon}></SliderIcon>
                    <SliderTitle>{title}</SliderTitle>
                    <SliderText>{text}</SliderText>
                  </SliderWrapperContent>
                </SliderItemWrapper>
              </SliderItem>
            );
          })}
        </SliderEdit>
      </SliderWrapper>
    </SliderBox>
  );
};
