export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayIdx = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return randomIndex;
};

export const returnSpliceArray = (array) => {
  const index = getRandomArrayIdx(array);
  array.splice(index, 1);
  return { index };
};

export const returnSpliceMockArray = (array, idx) => {
  const result = array.splice(idx, 1);
  return result[0];
};