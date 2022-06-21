import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import getHours from 'date-fns/getHours'
import getDay from 'date-fns/getDay';

/**
 * 날짜를 단위별로 받아 문자열로 반환합니다.
 * unit 생략 시 '오후 12:59' 형태로 출력됩니다.
 * @param date
 * @param unit
 */
export const formatDateAtom = (date?: string, unit?: string): string => {
  const fnsDate = parseISO(date || '')
  const week = ['일', '월', '화', '수', '목', '금', '토']

  switch (unit) {
    case 'week':
      return week[getDay(fnsDate)]
    case 'weekly':
      return `${format(fnsDate, 'M.d')} (${week[getDay(fnsDate)]})`
    case 'year':
      return format(fnsDate, 'yyyy')
    case 'month':
      return format(fnsDate, 'MM')
    case 'day':
      return format(fnsDate, 'dd')
    case 'hour':
      return format(fnsDate, 'HH')
    case 'minute':
      return format(fnsDate, 'mm')
    case 'meridiem':
      return Number(getHours(fnsDate)) < 12 ? '오전' : '오후'
    default:
      return `${Number(getHours(fnsDate)) < 12 ? '오전' : '오후'} ${format(fnsDate, 'HH:mm')}`
  }
}
