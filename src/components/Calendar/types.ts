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