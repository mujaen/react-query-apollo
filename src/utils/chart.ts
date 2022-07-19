import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

const maxRange = {
  max20: {
    max: 20,
    range: ['0', '5', '10', '15', '20'],
  },
  max50: {
    max: 50,
    range: ['0', '10', '25', '35', '50'],
  },
  max100: {
    max: 100,
    range: ['0', '25', '50', '75', '100'],
  },
  default: {
    max: 500,
    range: ['0', '100', '250', '400', '500'],
  },
}

/**
 * 배열의 숫자 중 최댓값을 반환한다
 * @param numberArray
 * @type { ({numberArray: number[]}) => number }
 */
const getMaxNumberOfArray = (numberArray: number[]): number => {
  return Math.max(...numberArray, 0)
}

/***
 * 입력받은 값의 Y좌표를 구한다
 * @param yAxisWidth
 * @param max
 * @param value
 * @description Y좌표 = (Y축 너비값 / 최댓값) * 입력받은 값
 * @type { ({yAxisWidth: number, value: number, max: number}) => number }
 */
const makeYPoint = (yAxisWidth: number, max: number, value: number): number => {
  return (yAxisWidth / max) * value || 0
}

/***
 * 데이터를 받아 날짜를 변환한다
 * @param date
 * @param index
 * @description 첫 번째 날짜만 M/d 형식으로 변환한다
 */
const formatDate = (date: string, index: number): string => {
  return `${format(parseISO(date), index == 0 ? 'M/d' : 'dd')}`
}

/***
 * 최댓값과 문자열로 key를 받아 범위안의 결과값을 반환합니다.
 * @param max
 * @param key
 */
const setMaxRange = (max, key) => {
  switch (true) {
    case max < 20:
      return maxRange.max20[key]
    case max < 50:
      return maxRange.max50[key]
    case max < 100:
      return maxRange.max100[key]
    default:
      return maxRange.default[key]
  }
}

interface LineChart {
  lines: LineChartData[]
  range: []
}

interface LineChartData {
  points: number[]
}

interface chartOption {
  fromDate: Date
  points: number[]
  line: number
  x: number
}

export const drawLineChart = (option: chartOption): LineChart => {
  const max = getMaxNumberOfArray([...option.points.map((day) => day || 0)])
  const fromDay = option.fromDate
  const range = setMaxRange(max, 'range')
  const day = new Date(option.fromDate.getTime())

  const chart: LineChart = {
    lines: [],
    range: range
  }
  let LOOP_COUNT = 0

  do {
    let POINT_OF_LINE: number[] = []
    let DATE_OF_LINE: string[] = []

    for(let i=0; i < option.x; i++) {
      POINT_OF_LINE = [...POINT_OF_LINE, makeYPoint(300, max, option.points[LOOP_COUNT] || 0)]
      DATE_OF_LINE = [...DATE_OF_LINE, format(day, 'yyyy-MM-dd')]
      day.setDate(day.getDate() - 1)
      ++LOOP_COUNT
    }
    chart.lines = [
      ...chart.lines,
      {
        dateStr: DATE_OF_LINE,
        points: POINT_OF_LINE,
      }
    ]
  } while ((LOOP_COUNT / option.x) < option.line)

  return chart
}