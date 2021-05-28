export const getAdaptiveSizePx = (min: number, max: number, minWith: number, maxWith: number): string => {
  return `calc(${min}px + (${max} - ${min}) * (100vw - ${minWith}px) / (${maxWith} - ${minWith}))`;
};
