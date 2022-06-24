import React, {useState, useEffect} from 'react';
import {CalendarProps} from './types';
import {getNextMonth, getPrevMonth} from 'utils/calendar';

function Calendar({data, direction}: CalendarProps) {
  const [yearMonth, setYearMonth] = useState({
    year: 2022,
    month: 1
  });

  const _onCalendar = (): void => {

  };

  const handleNextMonth = (): void => {
    setYearMonth(getNextMonth(yearMonth));
  };

  const handlePrevMonth = (): void => {
    setYearMonth(getPrevMonth(yearMonth));
  };

  useEffect(() => {
    _onCalendar();
  }, [yearMonth])

  return (
    <>

      {direction ?
        <>
          <button type='button' onClick={handlePrevMonth}>이전</button>
          <button type='button' onClick={handleNextMonth}>다음</button>
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
            {data.map((day, index) => {
              return
            })}
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calendar;