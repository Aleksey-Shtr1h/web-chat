interface SizeNumberWidthInterface {
  maxDesktopWidth: number;
  desktopWidth: number;
  smDesktopWidth: number;
  tableWidth: number;
  smTableWidth: number;
  phoneWidth: number;
  smPhoneWidth: number;
}

interface MediaSizePixselWidthInterface {
  maxDesktopWidth: string;
  desktopWidth: string;
  smDesktopWidth: string;
  tableWidth: string;
  smTableWidth: string;
  phoneWidth: string;
  smPhoneWidth: string;
}

export const SizeNumberWidth: SizeNumberWidthInterface = {
  maxDesktopWidth: 1440,
  desktopWidth: 1280,
  smDesktopWidth: 1024,
  tableWidth: 768,
  smTableWidth: 640,
  phoneWidth: 480,
  smPhoneWidth: 320,
};

export const MediaSizePixselWidth: MediaSizePixselWidthInterface = {
  maxDesktopWidth: "@media screen and (max-width: 1440px)",
  desktopWidth: "@media screen and (max-width: 1280px)",
  smDesktopWidth: "@media screen and (max-width: 1024px)",
  tableWidth: "@media screen and (max-width: 768px)",
  smTableWidth: "@media screen and (max-width: 640px)",
  phoneWidth: "@media screen and (max-width: 480px)",
  smPhoneWidth: "@media screen and (max-width: 320px)",
};
