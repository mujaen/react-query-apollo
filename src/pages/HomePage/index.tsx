import React from 'react';
import Calendar from 'components/Calendar';

const HomePage: React.FC = ({}) => {
  const calendar = [
    {
      dateStr: '2022-06-28',
      schedules: [],
    },
    {
      dateStr: '2022-06-29',
      schedules: [],
    },
    {
      dateStr: '2022-06-30',
      schedules: [
        {
          id: '1',
        },
      ],
    },
    {
      dateStr: '2022-07-01',
      schedules: [
        {
          id: '1',
        },
      ],
    },
    {
      dateStr: '2022-07-02',
      schedules: [
        {
          id: '1',
        },
        {
          id: '2',
        },
      ],
    },
  ]

  return (
    <>
      <Calendar data={calendar} />
    </>
  );
};

export default HomePage;