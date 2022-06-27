import React from 'react';
import Calendar from 'components/Calendar';

const HomePage: React.FC = ({}) => {
  const calendar = [
    {
      day: 1,
      c: '일정'
    },
    {
      day: 2,
      c: '일정'
    },
    {
      day: 3,
      c: '일정'
    },
    {
      day: 4,
      c: '일정'
    },
    {
      day: 5,
      c: '일정'
    },
    {
      day: 6,
      c: '일정'
    },
    {
      day: 7,
      c: '일정'
    },
    {
      day: 8,
      c: '일정'
    },
    {
      day: 9,
      c: '일정'
    },
  ]

  return (
    <>
      <Calendar data={calendar} />
    </>
  );
};

export default HomePage;