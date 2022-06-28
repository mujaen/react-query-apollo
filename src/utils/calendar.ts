import { YearMonth, Calendar, CalendarDay } from 'components/Calendar/types';
import format from 'date-fns/format'

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
 * @param firstDay
 * @param monthDate
 * @description Math.ceil((당월 첫 날 요일 + 당월 전체 일자) / 7일)
 * @type { (firstDay: number, monthDate: number) => number }
 */
const getWeekOfMonth = (firstDay, monthDate) => {
  return Math.ceil((firstDay + monthDate) / 7);
}

/**
 * 당월 첫 날에 해당되는 요일을 구한다
 * @param yearMonth
 * @type { ({year: number, month: number}) => Date }
 */
const getFirstDayOfMonth = (yearMonth: YearMonth): Date => {
  return new Date(yearMonth.year, yearMonth.month - 1, 1, 0, 0, 0)
}

/**
 * 당월 마지막 날에 해당되는 요일을 구한다
 * @param yearMonth
 * @type { ({year: number, month: number}) => Date }
 */
const getLastDayOfMonth = (yearMonth: YearMonth): Date => {
  return new Date(yearMonth.year, yearMonth.month, 0, 0, 0, 0, 0)
}

/**
 * 당월 1주차에 포함된 이전 달의 첫 날짜를 구한다
 * @param date
 * @type { (date: Date) => Date }
 */
const getFirstDayOfWeek = (date: Date): Date => {
  const firstDay = new Date(date.getTime());
  const week = date.getDay();

  firstDay.setDate(firstDay.getDate() - week);

  return firstDay;
}

/**
 * 당월 마지막 주차에 포함된 다음 달의 마지막 날짜를 구한다
 * @param date
 * @type { (date: Date) => Date }
 */
const getLastDayOfWeek = (date: Date): Date => {
  const lastDay = new Date(date.getTime());
  const week = lastDay.getDay();

  lastDay.setDate(lastDay.getDate() + (6 - week));

  return lastDay;
}

/**
 * 받은 연월에 해당되는 달력을 그려줍니다
 * @param yearMonth
 * @constant todate - 오늘날짜
 * @constant firstDay - 이번 달 시작날
 * @constant lastDay - 이번 달 마지막날
 * @constant firstOfCalendar - 당월에 포함된 이전 달의 첫 날짜
 * @constant lastOfCalendar - 당월에 포함된 다음 달의 마지막 날짜
 * @type { ({year: number, month: number}) => Calendar }
 */
export const drawCalendar = (yearMonth: YearMonth): Calendar => {
  const toDate = new Date();
  const firstDay = getFirstDayOfMonth(yearMonth);
  const lastDay = getLastDayOfMonth(yearMonth);
  const firstOfCalendar = getFirstDayOfWeek(firstDay);
  const lastOfCalendar = getLastDayOfWeek(lastDay);
  const day = new Date(firstOfCalendar.getTime());

  const calendar: Calendar = {
    weeks: [],
    term: {
      startedAt: 2,
      endedAt: 1,
    }
  }

  do {
    let days: CalendarDay[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(day.getTime());

      days = [...days, {
        dateStr: format(date, 'yyyy-MM-dd'),
        date: date,
        term: {
          startedAt: date.getTime(),
          endedAt: date.getTime(),
        },
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        today: true,
        currentMonth: true,
      }]

      day.setDate(day.getDate() + 1);
    }

    calendar.weeks = [...calendar.weeks, {
      days: days,
      term: {
        startedAt: 2,
        endedAt: 1,
      }
    }]

  } while (day.getTime() < lastOfCalendar.getTime())

  return calendar
}

