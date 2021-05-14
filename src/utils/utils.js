import { MONTH_NAMES } from '../constant';

const getDateFormat = (date) => {
  return date < 10 ? '0' + date : date;
};

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
  const dateNow = new Date().getDate();
  const monthNow = new Date().getMonth();
  const yearNow = new Date().getFullYear();

  const dateComment = date.getDate();
  const monthComment = date.getMonth();
  const yearComment = date.getFullYear();

  const yearResult = yearComment;
  const monthResult = searchMonth(monthComment, MONTH_NAMES);
  const dateResult = getDateFormat(dateComment);

  if (
    monthNow + yearNow === monthComment + yearComment &&
    dateNow === dateComment
  ) {
    return `today`;
  } else if (
    monthNow + yearNow === monthComment + yearComment &&
    dateNow === dateComment + 1
  ) {
    return `yesterday`;
  }

  return `${dateResult} ${monthResult} ${yearResult}`;
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
    }
  });

  return messangesRoom;
};

export const getTimeFormat = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return String(`${getDateFormat(hours)}:${getDateFormat(minutes)}`);
};

export const getShotTitleRoom = (titleText, maxLength) => {
  if (titleText.length >= maxLength) {
    const shotTitle = titleText.slice(0, 10) + '...';
    return shotTitle;
  }

  return titleText;
};
