import React, { useState, useMemo } from 'react'
import { CalendarProps, CalendarStyles, CalendarMonth } from './types'
import { getNextMonth, getPrevMonth, drawCalendar } from 'utils/calendar'
import styled, { useTheme } from 'styled-components'

const CalendarWarpper = styled.div`
  padding: 0 20px;

  table {
    width: 100%;
  }

  tr {
    display: flex;
    justify-content: space-around;
  }

  th,
  td {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    text-align: center;
  }

  th {
    padding: 7px 0;
    color: ${({ theme }) => theme.colors.gray500};
    ${({ theme }) => theme.fonts.M50};
    line-height: 16px;
  }

  td {
    padding: 7px 7px 0 7px;
    min-height: 54px;
    box-sizing: border-box;
  }
`

const CalendarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CalendarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white900};
`

const CalendarBody = styled.div`
  margin: 0 -8px;
`

const CalendarDay = styled.div<CalendarStyles>`
  padding: 8px;
  color: ${({ theme, month }) => (month ? theme.colors.gray900 : theme.colors.gray200)};
  ${({ theme }) => theme.fonts.R100};
  border-radius: 5px;
  background-color: ${({ theme, today }) => (today ? theme.colors.gray50 : theme.colors.white900)};
`

const CalendarScheduleDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3px;
  padding-left: 1px;
`

const CalendarDot = styled.span<CalendarMonth>`
  width: 4px;
  height: 4px;
  margin: 0 2px 0 1px;
  border-radius: 50%;
  background-color: ${({ theme, month }) =>
  month ? theme.colors.primary500 : theme.colors.gray200};
`

const CalendarYearMonth = styled.h2`
  ${({ theme }) => theme.fonts.B400};
`

function Calendar({ data }: CalendarProps) {
  const theme = useTheme()
  const [yearMonth, setYearMonth] = useState({
    year: 2022,
    month: 6,
  })

  const handleModal = (date): void => {
    return date
  }

  const handleNextMonth = (): void => {
    setYearMonth(getNextMonth(yearMonth))
  }

  const handlePrevMonth = (): void => {
    setYearMonth(getPrevMonth(yearMonth))
  }

  const buildCalendar = useMemo(() => {
    return drawCalendar(yearMonth)
  }, [yearMonth])

  return (
    <CalendarWarpper>
      <CalendarHeader>
        <CalendarButton type="button" onClick={handlePrevMonth}>
          &lt;
        </CalendarButton>
        <CalendarYearMonth>
          {yearMonth.year}년 {yearMonth.month}월
        </CalendarYearMonth>
        <CalendarButton onClick={handleNextMonth}>
          &gt;
        </CalendarButton>
      </CalendarHeader>
      <CalendarBody>
        <table>
          <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
          </thead>
          <tbody>
          {buildCalendar.weeks.map((week, index) => (
            <tr key={index}>
              {week.days.map((day) => (
                <td key={day.date.getTime()} onClick={handleModal}>
                  <CalendarDay today={day.today} month={day.currentMonth}>
                    {day.day}
                  </CalendarDay>
                  <CalendarScheduleDots>
                    {data
                      ?.filter((schedule) => schedule.dateStr == day.dateStr)
                      .map((item) =>
                        item.schedules.map((info) => (
                          <CalendarDot key={info.id} month={day.currentMonth} />
                        )),
                      )}
                  </CalendarScheduleDots>
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </CalendarBody>
    </CalendarWarpper>
  )
}

export default Calendar