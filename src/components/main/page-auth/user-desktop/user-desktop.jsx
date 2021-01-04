import React from "react";
import { Preload } from "../../../preload/preload";
import { useSelector } from "react-redux";
import { getTogglePreloadMessanges } from "../../../../redux/app/appSelector";

import { PreloadSettings } from "../../../../constant";
import { PulseLoader } from "react-spinners";

export const UserDesktop = ({ children }) => {
  const isPreloadMessanges = useSelector((state) =>
    getTogglePreloadMessanges(state)
  );

  const preload = (
    <PulseLoader
      height={40}
      width={8}
      radius={20}
      margin={20}
      color={"#000"}
      loading
    />
  );

  return (
    <section className="user-desktop">
      {isPreloadMessanges ? (
        <Preload preloadSettings={PreloadSettings.MAIN} preload={preload} />
      ) : (
        children
      )}

      {/* {children} */}
    </section>
  );
};
