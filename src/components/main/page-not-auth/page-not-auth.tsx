import React from 'react';

import { SliderWellcome } from './slider-wellcome';
import { MainStart } from './slider-wellcome.styled';

export const PageNotAuth: React.FC = () => {
  return (
    <MainStart>
      <SliderWellcome />
    </MainStart>
  );
};
