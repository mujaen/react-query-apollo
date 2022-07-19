interface Schedules {
  id: string
}

interface CalendarDataProps {
  dateStr: string
  schedules: Schedules[]
}

export interface CalendarProps {
  data?: CalendarDataProps[]
}

export interface CalendarStyles {
  today: boolean
  month: boolean
}

export type CalendarMonth = Pick<CalendarStyles, 'month'>

export interface YearMonth {
  year: number
  month: number
}

export interface Calendar {
  weeks: CalendarWeek[]
  term: Term
}

export interface CalendarDay {
  dateStr: string
  date: Date
  term: Term
  year: number
  month: number
  day: number
  today: boolean
  currentMonth: boolean
}

interface CalendarWeek {
  xLabels: string[]
  yLabels: string[]
  points: number[]
  line: number
}

interface Term {
  startedAt: number
  endedAt: number
}
