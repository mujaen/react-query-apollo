import React from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

interface LineChartDataProps {
    date?: string
    value?: number
}

interface LineChartOptionProps {
    width?: number
    title?: string
}

interface LineChartProps {
    data: LineChartDataProps[]
    options?: LineChartOptionProps
    title: string
}

const Wrapper = styled.div`
  padding: 0 20px;
`

const Title = styled.text`
  color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.M150};
  line-height: 20px;
`

const StyledText = styled.text`
  fill: ${({ theme }) => theme.colors.gray500};
  ${({ theme }) => theme.fonts.R50};
  line-height: 16px;
`

const MainLine = styled.path`
  stroke: ${({ theme }) => theme.colors.gray200};
  stroke-width: 1;
  shape-rendering: crispEdges;
  fill: none;
`

const SubLine = styled.path`
  stroke: ${({ theme }) => theme.colors.gray50};
  stroke-width: 1;
  shape-rendering: crispEdges;
  fill: none;
`

const ThisWeekPath = styled.path`
  stroke: ${({ theme }) => theme.colors.primary500};
  stroke-width: 3;
  stroke-linecap: round;
  fill: none;
`

const LastWeekPath = styled.path`
  stroke: ${({ theme }) => theme.colors.blue400};
  stroke-width: 3;
  stroke-linecap: round;
  fill: none;
`

const StyledThisLabelPath = styled.path`
  stroke: ${({ theme }) => theme.colors.primary500};
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
`

const StyledLastLabelPath = styled.path`
  stroke: ${({ theme }) => theme.colors.blue400};
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
`

function LineChart({ data, options }: LineChartProps) {
    const initialOptions = {
        title: options?.title,
        outerWidth: options?.width || 1000,
        outerHeight: 252,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 30,
        xStartPoint: 20,
        xStartText: 30,
        xTextMargin: 14,
        yTextMargin: 16,
        yTextAxis: 5,
        culumnSpace: 38,
        xTicks: 6,
    }
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
    const {
        title,
        outerWidth,
        outerHeight,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        xStartPoint,
        xStartText,
        xTextMargin,
        yTextMargin,
        yTextAxis,
        culumnSpace,
        xTicks,
    } = initialOptions

    // 최댓값
    const max = Math.max(...data.map((day) => day.value || 0), 0)
    // x 중심선 너비
    const xAxisLength = outerWidth
    // y 중심선 너비
    const yAxisLength = outerHeight - (paddingTop + paddingBottom)
    // y 시작점 위치
    const yStartPoint = culumnSpace + yAxisLength
    const reverseData = data.reverse()

    /***
     * 예약 수와 최댓값을 받아 각 날짜별 위치값을 반환합니다.
     * @param value
     * @param max
     */
    const makePoint = (value: number, max: number): number => {
        return (yAxisLength / max) * value
    }

    /***
     * 데이터를 받아 날짜를 변환합니다.
     * @param data
     * @param index
     */
    const formatDate = (data, index): string => {
        return `${format(parseISO(data.date), index == 7 ? 'M/d' : 'dd')}`
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

    /***
     * 주별 데이터를 받아 패스의 좌표를 반환합니다
     * @param thisDay
     * @param nextDay
     * @param index
     */
    const drawWeekPath = (thisDay, nextDay, index): string => {
        if (nextDay) {
            return `M ${((outerWidth - (paddingLeft + paddingRight)) / xTicks) * index + xStartText}, ${
              yStartPoint - makePoint(thisDay.value, setMaxRange(max, 'max'))
            } L ${((outerWidth - (paddingLeft + paddingRight)) / xTicks) * (index + 1) + xStartText}, ${
              yStartPoint - makePoint(nextDay.value, setMaxRange(max, 'max'))
            }`
        }

        return ''
    }

    const drawLabelPath = (x: number, y: number): string => {
        return `M${outerWidth / 2 - x}, ${yStartPoint + y} L${outerWidth / 2 - (x - 10)}, ${
          yStartPoint + y
        }`
    }

    const drawMainLine = (): string => {
        return `M${xStartPoint}, ${yStartPoint} H${xAxisLength}`
    }

    const drawSubLine = (index): string => {
        return `M${xStartPoint}, ${yStartPoint - culumnSpace * index} L${xAxisLength} ${
          yStartPoint - culumnSpace * index
        }`
    }

    return (
      <Wrapper>
          <svg width={outerWidth} height={outerHeight}>
              <g>
                  <Title x={0} y={14}>
                      {title}
                  </Title>
              </g>
              {setMaxRange(max, 'range').map((value, index) => (
                <g key={`chartline-${index}`}>
                    {index == 0 ? <MainLine d={drawMainLine()} /> : <SubLine d={drawSubLine(index)} />}
                    <StyledText
                      x={xTextMargin}
                      y={yStartPoint - culumnSpace * index + yTextAxis}
                      textAnchor="end"
                    >
                        {value}
                    </StyledText>
                </g>
              ))}
              {reverseData.map((day, index) => (
                <g key={`chartday-${index}`}>
                    {index < 7 ? (
                      index == 6 ? (
                        ''
                      ) : (
                        <LastWeekPath d={drawWeekPath(day, reverseData[index + 1], index)} />
                      )
                    ) : (
                      <>
                          <StyledText
                            x={
                              ((outerWidth - (paddingLeft + paddingRight)) / xTicks) * (index - 7) +
                              xStartText
                            }
                            y={yStartPoint + yTextMargin}
                          >
                              {formatDate(day, index)}
                          </StyledText>
                          <ThisWeekPath d={drawWeekPath(day, reverseData[index + 1], index - 7)} />
                      </>
                    )}
                </g>
              ))}

              <g>
                  <StyledThisLabelPath d={drawLabelPath(57, 43)}></StyledThisLabelPath>
                  <StyledText x={outerWidth / 2 - 42} y={yStartPoint + yTextMargin * 3}>
                      이번주
                  </StyledText>
                  <StyledLastLabelPath d={drawLabelPath(-10, 43)}></StyledLastLabelPath>
                  <StyledText x={outerWidth / 2 + 26} y={yStartPoint + yTextMargin * 3}>
                      지난주
                  </StyledText>
              </g>
          </svg>
      </Wrapper>
    )
}

export default LineChart