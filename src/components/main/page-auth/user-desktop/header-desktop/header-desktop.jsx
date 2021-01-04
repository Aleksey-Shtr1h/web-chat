import React from "react";
import { InfoRoom } from "./info-room/info-room";
import { MenuRoom } from "./menu-room/menu-room";

export const HeaderDesktop = () => {
  return (
    <div className="user-desktop-header">
      <InfoRoom />
      <MenuRoom />
    </div>
  );
};
