import React from "react";
import { ContainerPreload, PreloadTitle } from "./preload.styled";

export const Preload = ({ preloadSettings, preload }) => {
  const { TITLE, POSITION } = preloadSettings;

  const text = TITLE ? "loading" : "";

  return (
    <ContainerPreload position={POSITION}>
      <PreloadTitle>{text}</PreloadTitle>
      {preload}
    </ContainerPreload>
  );
};
