import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';
import moment from 'moment';
import fns from 'date-fns/parseISO';
import format from 'date-fns/format';


interface ScheduleData {
  id: number;
  schedule: {
    title?: string;
    createAt?: string;
    totalCount?: string;
    maxCount?: string;
  }
}

interface CardScheduleProps {
  schedule: ScheduleData;
  isWideList?: boolean;
  onClickContents?: () => void;
}

const Wrapper = styled.div<CardScheduleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({isWideList}) => isWideList ? '18px 20px' : '18px 0'};
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid #F4F4F4;
  }
`

const Contents = styled.div`
  display: flex;
  width: calc(100% - 16px);
`

const Avatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background-color: #F4F4F4;
`

const InfoWrapper = styled.div`
  width: calc(100% - 84px);
  padding-left: 16px;
`

const ScheduleTime = styled.time`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`

const ScheduleInfo = styled.div`
  display: flex;
`

const ScheduleCount = styled.div`
  color: #777;
  font-weight: 500;
`

const ScheduleTitle = styled.div`
  max-width: 79%;
  color: #777;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Icon = styled.div`

`;


function CardSchedule({
    schedule,
    isWideList,
    onClickContents
  }: PropsWithChildren<CardScheduleProps>): JSX.Element {
  const {
    title,
    createAt,
    totalCount,
    maxCount,
  } = schedule.schedule;

  const formatDateAtom = (date, key: string): string => {
    const momentDate: moment.Moment = moment(date);

    const week = ['일', '월', '화', '수', '목', '금', '토'];

    switch (key) {
      case 'week':
        return week[new Date(format(fns(date),'YYYY-MM-DD')).getDay()]
      case 'year':
        return format(fns(date),'YYYY')
      case 'month':
        return format(fns(date),'MM')
      case 'day':
        return format(fns(date),'DD')
      case 'hour':
        return format(fns(date),'HH');
      case 'minute':
        return format(fns(date),'mm');
      case 'meridiem':
        return Number(format(fns(date),'HH')) < 12 ? '오전' : '오후';
      default:
        return format(fns(date),'YYYY-MM-DD HH:mm');
    }
  }

  return (
    <Wrapper isWideList={isWideList} onClick={onClickContents}>
      <Contents>
        <Avatar />
        <InfoWrapper>
          <ScheduleTime>
            {`${formatDateAtom(createAt, 'meridiem')} ${formatDateAtom(createAt, 'hour')}:${formatDateAtom(createAt, 'minute')}`}
          </ScheduleTime>
          <ScheduleInfo>
            <ScheduleCount>
              {`${totalCount}/${maxCount}명`}
            </ScheduleCount>
            <ScheduleTitle>
              &nbsp;&#183;&nbsp;{`${title}`}
            </ScheduleTitle>
          </ScheduleInfo>
        </InfoWrapper>
      </Contents>
      <Icon>
        &gt;
      </Icon>
    </Wrapper>
  )
}

export default CardSchedule;