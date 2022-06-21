import React, {useState, useEffect} from 'react';
import {Calendarprops} from './types';
import axios from 'axios';

function Calendar({direction, url}:React.FC<Calendarprops> ) {
    const [today, setToday] = useState(new Date());
    const [data, setData] = useState([]);
    const weekly = ['일', '월', '화', '수', '목', '금', '토'];

    const _prevCalendar = (): void => {
        setToday(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));
    };

    const _nextCalendar = (): void => {
        setToday(new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()));
    };

    const _makeCalendar = () => {
        console.log(today.toLocaleTimeString());
    };

    const _onCalendar = async () => {
        const response = await axios.get(`${url}?year=${today.getFullYear()}&month=${today.getMonth()}`);
        setData(response.data);
    };

    useEffect(() => {
        _makeCalendar();
    }, [data]);

    useEffect(() => {
        _onCalendar();
    }, [today])

    return (
      <>

        {direction ?
          <>
              <button type='button' onClick={_prevCalendar}>이전</button>
              <button type='button' onClick={_nextCalendar}>다음</button>
            </>
          : ''}
          <table border="1">
              <tbody>

              </tbody>

          </table>
          <div>{weekly.map((week) => (<span>{week}</span>))}</div>
      </>
    );
};

export default Calendar;