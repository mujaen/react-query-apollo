import React, {useState, useEffect} from 'react';
import {Calendarprops} from './types';
import {getNextMonth, getPrevMonth} from 'utils/calendar';

function Calendar({direction}: Calendarprops) {
  const weekly = ['일', '월', '화', '수', '목', '금', '토'];
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
          {weekly.map((week) => (<th>{week}</th>))}
        </thead>
        <tbody>

        </tbody>
      </table>
    </>
  );
}

export default Calendar;