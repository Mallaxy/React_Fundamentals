import moment from 'moment';

const dataFormat = 'D/M/YYYY';
const previewFormat = 'D.M.YYYY';

export const getCurrentDate = () => moment().format(dataFormat);

export const convertDateFormat = (date) => {
  return moment(date, dataFormat).format(previewFormat);
};
