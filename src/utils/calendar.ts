import { YearMonth } from 'components/Calendar/types';

export const getNextMonth = (yearMonth: YearMonth): YearMonth => {
  return {
    year: yearMonth.month === 12 ? yearMonth.month + 1 : yearMonth.year,
    month: yearMonth.month === 12 ? 1 : yearMonth.month + 1,
  }
};

export const getPrevMonth = (yearMonth: YearMonth): YearMonth => {
  return {
    year: yearMonth.month === 1 ? yearMonth.year - 1 : yearMonth.year,
    month: yearMonth.month === 1 ? 12 : yearMonth.month - 1,
  }
};
