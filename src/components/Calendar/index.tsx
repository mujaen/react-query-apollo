import React, {useState, useEffect} from 'react';
import {CalendarProps} from './types';
import {getNextMonth, getPrevMonth} from 'utils/calendar';
import styled from 'styled-components'

const CalendarWarpper = styled.div`
  tr {
    display: flex;
    justify-content: space-around;
  }
`

function Calendar({data}: CalendarProps) {
  const [yearMonth, setYearMonth] = useState({
    year: 2022,
    month: 1
  });

  const handleNextMonth = (): void => {
    setYearMonth(getNextMonth(yearMonth));
  };

  const handlePrevMonth = (): void => {
    setYearMonth(getPrevMonth(yearMonth));
  };

  return (
    <CalendarWarpper>
      <button type='button' onClick={handlePrevMonth}>이전</button>
      <h2>7월</h2>
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
          {data?.map((date) => (
            <tr>
              <td>
                <span>{date.day}</span>
                <p>{date.c}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CalendarWarpper>
  );
}

export default Calendar;