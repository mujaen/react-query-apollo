import React, {useState, useEffect} from 'react';
import {Calendarprops} from './types';
import {getNextMonth, getPrevMonth} from 'utils/calendar';

function Calendar({direction}: Calendarprops) {
  const [yearMonth, setYearMonth] = useState({
    year: 2022,
    month: 1
  });

  const _onCalendar = (): void => {

  };

  const _nextCalendar = (): void => {
    setYearMonth(getNextMonth(yearMonth));
  };

  const _prevCalendar = (): void => {
    setYearMonth(getPrevMonth(yearMonth));
  };

  useEffect(() => {
    _onCalendar();
  }, [yearMonth])

  return (
    <>

      {direction ?
        <>
          <button type='button' onClick={_prevCalendar}>이전</button>
          <button type='button' onClick={_nextCalendar}>다음</button>
        </>
        : ''}
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
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calendar;