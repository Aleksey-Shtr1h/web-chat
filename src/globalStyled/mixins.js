export const getAdaptiveSizePx = (min, max, minWith, maxWith) => {
  return `calc(${min}px + (${max} - ${min}) * (100vw - ${minWith}px) / (${maxWith} - ${minWith}))`;
};
