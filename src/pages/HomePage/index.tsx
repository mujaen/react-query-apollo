import React from 'react';
import LineChart from 'components/LineChart';
import DisplayWeek from "../../components/DisplayWeek";

const HomePage: React.FC = ({}) => {
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
  const contentWidth = window.innerWidth - 100;

  return (
    <>
      <LineChart data={trends} width={contentWidth} title='예약 수' />
      <DisplayWeek data={trends} />
    </>
  );
};

export default HomePage;