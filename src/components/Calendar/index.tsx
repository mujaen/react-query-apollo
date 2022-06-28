import React, {useState, useEffect, useMemo} from 'react';
import {CalendarProps} from './types';
import {getNextMonth, getPrevMonth, drawCalendar} from 'utils/calendar';
import styled from 'styled-components'

const CalendarWarpper = styled.div`
  tr {
    display: flex;
    justify-content: space-around;
  }
`

const CalendarYearMonth = styled.h2`
  
`

function Calendar({data}: CalendarProps) {
  const [yearMonth, setYearMonth] = useState({
    year: 2022,
    month: 6
  });

  const handleNextMonth = (): void => {
    setYearMonth(getNextMonth(yearMonth));
  };

  const handlePrevMonth = (): void => {
    setYearMonth(getPrevMonth(yearMonth));
  };

  const buildCalendar = useMemo(() => {
    return drawCalendar(yearMonth);
  }, [yearMonth])

  console.log(buildCalendar)

  return (
    <CalendarWarpper>
      <button type='button' onClick={handlePrevMonth}>이전</button>
      <CalendarYearMonth>7월</CalendarYearMonth>
      <button type='button' onClick={handleNextMonth}>다음</button>
      <table>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {buildCalendar.weeks.map((week, index) => (
            <tr key={index}>
              {week.days.map((day) => (
                <td key={day.date.getTime()}>
                  <span>{day.day}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </CalendarWarpper>
  );
}

export default Calendar;