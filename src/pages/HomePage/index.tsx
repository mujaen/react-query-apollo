import React from 'react';
import CardSchedule from 'components/CardSchedule';
import PageTitle from 'components/Title/PageTitle';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const HomePage: React.FC = ({}) => {
  //TODO: 실제 데이터로 변경 필요
  const schedules = [
    {
      id: 1,
      schedule: {
        title: '양재천 같이 달릴 사람,',
        createAt: '2022-03-28T04:09:30.000Z',
        totalCount: '4',
        maxCount: '7'
      }
    },
    {
      id: 2,
      schedule: {
        title: '양재천 같이 달리고 마시고 영화보고 산책할 사람, 양재천 같이 달리고 마시고 영화보고 산책할 사람,',
        createAt: '2022-03-28T04:09:30.000Z',
        totalCount: '100',
        maxCount: '999'
      }
    }
  ];

  const handleClickScheduleContents = () => {
    //TODO: 클릭 시 해당 일정의 상세페이지로 이동
  }

  return (
    <>
      <PageTitle title="대시보드" count="8" isDetailPage={true}>
        //TODO: 기간선택 컴포넌트 구현 필요
      </PageTitle>
      {schedules?.map(schedule => (
        <CardSchedule
          key={`schedule-${schedule.id}`}
          schedule={schedule}
          isWideList={true}
          onClickContents={handleClickScheduleContents}
        />
      ))}
      <SectionTitle title="다가오는 일정" count="8">
        //TODO: 최근트렌드 차트기간 컴포넌트 구현 필요
      </SectionTitle>
    </>
  );
};

export default HomePage;