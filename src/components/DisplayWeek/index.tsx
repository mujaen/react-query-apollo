import React from 'react';
import styled from 'styled-components';

interface DisplayWeekDataProps {
  date: string;
}

interface DisplayWeekProps {
  data: DisplayWeekDataProps[],
}

const WeekRangeText = styled.div`
  
`

function DisplayWeek ({data}: DisplayWeekProps) {

  const formatDate = (): string => {
    return '12';
  }

  return (
    <>
      <WeekRangeText>{formatDate}5.19 (목) ~ 5.25 (수)</WeekRangeText>
    </>
  )
}

export default DisplayWeek;