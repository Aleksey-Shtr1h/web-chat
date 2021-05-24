import React from 'react';
import { ContainerPreload, PreloadTitle } from './preload.styled';

interface PreloadSettingsType {
  TITLE: boolean;
  POSITION: string;
}

interface Props {
  preloadSettings: PreloadSettingsType;
  preload: any;
}

export const Preload: React.FC<Props> = (props: Props) => {
  const { preloadSettings, preload } = props;
  const { TITLE, POSITION } = preloadSettings;

  const text = TITLE ? 'loading' : '';

  return (
    <ContainerPreload position={POSITION}>
      <PreloadTitle>{text}</PreloadTitle>
      {preload}
    </ContainerPreload>
  );
};
