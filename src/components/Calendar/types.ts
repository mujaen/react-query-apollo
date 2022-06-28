interface CalendarDataProps {
    day: number;
    c: string;
}

export interface CalendarProps {
    data?: CalendarDataProps[];
}

export interface YearMonth {
    year: number;
    month: number;
}

export interface Calendar {
    weeks: CalendarWeek[];
    term: Term;
}

export interface CalendarDay {
  dateStr: string;
  date: Date;
  term: Term;
  year: number;
  month: number;
  day: number;
  today: boolean;
  currentMonth: boolean;
}

interface CalendarWeek {
  days: CalendarDay[];
  term: Term;
}

interface Term{
   startedAt: number;
   endedAt: number;
}