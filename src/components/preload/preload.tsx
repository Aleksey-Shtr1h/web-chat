import React from "react";
import { ContainerPreload, PreloadTitle } from "./preload.styled";

interface PreloadType {
  height: number;
  width: number;
  radius: number;
  margin: number;
  color: string;
  loading: boolean;
}

export const Preload: React.FC<any> = ({ preloadSettings, preload }) => {
  const { TITLE, POSITION } = preloadSettings;

  const text = TITLE ? "loading" : "";

  return (
    <ContainerPreload position={POSITION}>
      <PreloadTitle>{text}</PreloadTitle>
      {preload}
    </ContainerPreload>
  );
};
