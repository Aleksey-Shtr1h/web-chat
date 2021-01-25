import React from "react";

export const Preload = ({ preloadSettings, preload }) => {
  const {
    CLASS_PRELOAD,
    CLASS_TITLE,
    CLASS_TEXT,
    STYLE_POSITION,
  } = preloadSettings;

  return (
    <div className={CLASS_PRELOAD} style={STYLE_POSITION}>
      <h2 className={CLASS_TITLE}>{CLASS_TEXT}</h2>
      {preload}
    </div>
  );
};
