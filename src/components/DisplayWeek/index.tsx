import React from 'react';
import styled from 'styled-components';
import { formatDateAtom } from 'utils/filters';

interface DisplayWeekDataProps {
  date?: string;
  value?: number;
}

interface DisplayWeekProps {
  data: DisplayWeekDataProps[],
}

const WeekRangeText = styled.div`
  color: #999;
  font-size: 14px;
  font-weight: 500;
`

function DisplayWeek ({data}: DisplayWeekProps) {

  const thisWeekData = data.slice(0, 7).reverse();

  return (
    <>
      <WeekRangeText>{formatDateAtom(thisWeekData[0].date, 'weekly')} ~ {formatDateAtom(thisWeekData[6].date, 'weekly')}</WeekRangeText>
    </>
  )
}

export default DisplayWeek;