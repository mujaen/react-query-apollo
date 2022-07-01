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
  const trends = [
    {
      date: '2020-06-13T00:00:00.000Z',
      value: 18
    },
    {
      date: '2020-06-12T00:00:00.000Z',
      value: 14
    },
    {
      date: '2020-06-11T00:00:00.000Z',
      value: 16
    },
    {
      date: '2020-06-10T00:00:00.000Z',
      value: 12
    },
    {
      date: '2020-06-09T00:00:00.000Z',
      value: 14
    },
    {
      date: '2020-06-08T00:00:00.000Z',
      value: 9
    },
    {
      date: '2020-06-07T00:00:00.000Z',
      value: 10
    },
    {
      date: '2020-06-06T00:00:00.000Z',
      value: 12
    },
    {
      date: '2020-06-05T00:00:00.000Z',
      value: 15
    },
    {
      date: '2020-06-04T00:00:00.000Z',
      value: 12
    },
    {
      date: '2020-06-03T00:00:00.000Z',
      value: 14
    },
    {
      date: '2020-06-02T00:00:00.000Z',
      value: 10
    },
    {
      date: '2020-06-01T00:00:00.000Z',
      value: 12
    },
    {
      date: '2020-05-31T00:00:00.000Z',
      value: 8
    },
  ]
  const option = {
    title: "예약관리",
    width: 325,
  }

  return (
    <>
      <Calendar data={calendar} />
    </>
  );
};

export default HomePage;