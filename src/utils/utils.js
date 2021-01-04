import { MONTH_NAMES } from '../constant.js';

const getDateFormat = (date) => {
  return date < 10 ? '0' + date : date;
}

export const searchMonth = (typeDate, searchArray) => {
  let result = null;
  searchArray.forEach((element, index) => {
    if (typeDate === index) {
      result = element;
    }
  });

  return result;
};

const getDayFormat = (date) => {
  const year = date.getFullYear();
  const month = searchMonth(date.getMonth(), MONTH_NAMES);
  const dateResult = getDateFormat(date.getDate());

  return `${dateResult} ${month} ${year}`;
};

export const getDays = (messanges) => {
  const messangesRoom = {};
  messanges.forEach((messange) => {
    if (messange.timestamp) {
      const { timestamp } = messange;
      const date = getDayFormat(timestamp.toDate());

      if (!messangesRoom[date]) {
        messangesRoom[date] = [];
      }

      messangesRoom[date].push(messange);
    } else {

      if (!messangesRoom['Loading']) {
        messangesRoom['Loading'] = [];
      }
      messangesRoom['Loading'].push(messange);

    };

  });

  return messangesRoom;
};

export const getTimeFormat = (time) => {

  const hours = time.getHours();
  const minutes = time.getMinutes();

  return String(`${getDateFormat(hours)}:${getDateFormat(minutes)}`);
};