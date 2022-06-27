import { YearMonth } from 'components/Calendar/types';

/**
 * 다음 달에 해당되는 연월을 구한다
 * @param yearMonth
 * @type { ({year: number, month: number}) => {year: number, month: number} }
 */
export const getNextMonth = (yearMonth: YearMonth): YearMonth => {
  return {
    year: yearMonth.month === 12 ? yearMonth.month + 1 : yearMonth.year,
    month: yearMonth.month === 12 ? 1 : yearMonth.month + 1,
  }
};

/**
 * 이전 달에 해당되는 연월을 구한다
 * @param yearMonth
 * @type { ({year: number, month: number}) => {year: number, month: number} }
 */
export const getPrevMonth = (yearMonth: YearMonth): YearMonth => {
  return {
    year: yearMonth.month === 1 ? yearMonth.year - 1 : yearMonth.year,
    month: yearMonth.month === 1 ? 12 : yearMonth.month - 1,
  }
};

/**
 * 당월 주차를 구한다
 * @param lastDay
 * @param weekDays
 * @type { (lastDays: number, weekDays: number) => number }
 */
export const getWeekOfMonth = (lastDays, weekDays) => {
  return Math.ceil((lastDays + weekDays) / 7);
}

/**
 * 당월 첫 날에 해당되는 요일을 구한다
 * @param yearMonth
 * @type { ({year: number, month: number}) => Date }
 */
export const getFirstDayOfMonth = (yearMonth: YearMonth): Date => {
  return new Date(yearMonth.year, yearMonth.month, -1, 1, 0, 0, 0)
}

/**
 * 당월 마지막 날에 해당되는 요일을 구한다
 * @param yearMonth
 * @type { ({year: number, month: number}) => Date }
 */
export const getLastDayOfMonth = (yearMonth: YearMonth): Date => {
  return new Date(yearMonth.year, yearMonth.month, 0, 0, 0, 0, 0)
}
