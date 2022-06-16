import React from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

interface LineChartDataProps {
    date?: string;
    value?: number;
}

interface LineChartProps {
    data: LineChartDataProps[],
    width: number;
    title: string
}

const Wrapper = styled.div`
    padding: 50px;
    border: 1px solid #000;
`

const Title = styled.text`
    color: #333;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
`

const StyledText = styled.text`
    fill: #999;
    font-size: 12px;
    line-height: 16px;
`

const MainLine = styled.path`
    stroke: #ddd;
    stroke-width: 1;
    shape-rendering : crispEdges;
    fill: none;
`

const SubLine = styled.path`
    stroke: #f4f4f4;
    stroke-width: 1;
    shape-rendering : crispEdges;
    fill: none;
`

const ThisWeekPath = styled.path`
    stroke: #0075EF;
    stroke-width: 3;
    stroke-linecap: round;
    fill: none;
`

const LastWeekPath = styled.path`
    stroke: #CCDAEA;
    stroke-width: 3;
    stroke-linecap: round;
    fill: none;
`

const StyledThisLabelPath = styled.path`
    stroke: #0075EF;
    stroke-width: 2;
    stroke-linecap: round;
    fill: none;
`

const StyledLastLabelPath = styled.path`
    stroke: #CCDAEA;
    stroke-width: 2;
    stroke-linecap: round;
    fill: none;
`


function LineChart({data, width, title}:LineChartProps) {
    const initialOptions = {
        outerWidth: width,
        outerHeight: 252,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 30,
        xStartPoint: 20,
        xStartText: 30,
        xTextMargin: 12,
        yTextMargin: 16,
        yTextAxis: 5,
        y: 38,
        xTicks: 6,
    }
    const maxRange = {
        max20: {
            max: 20,
            range: ['0', '5', '10', '15', '20']
        },
        max50: {
            max: 50,
            range: ['0', '10', '25', '35', '50']
        },
        max100: {
            max: 100,
            range: ['0', '25', '50', '75', '100']
        },
        default: {
            max: 500,
            range: ['0', '100', '250', '400', '500']
        }
    }
    const {outerWidth, outerHeight, paddingTop, paddingBottom, paddingLeft, paddingRight, xStartPoint, xStartText, xTextMargin, yTextMargin, yTextAxis, y, xTicks } = initialOptions;

    // 최댓값
    const max = Math.max(...data.map(day => day.value || 0), 0);
    // x 중심선 너비
    const xAxisLength = outerWidth;
    // y 중심선 너비
    const yAxisLength = outerHeight - (paddingTop + paddingBottom);
    // y 시작점 위치
    const yStartPoint = y + yAxisLength;
    const thisWeekData = data.slice(0, 7).reverse();
    const lastWeekData = data.slice(7).reverse();

    /***
     * 데이터를 받아 날짜를 변환합니다.
     * @param data
     */
    const formatDate = (data): string[] => {
        const newData = [''];
        data.map((_, index) => {
            newData[index] = `${format(parseISO(data[index].date), index == 0 ? 'M/d' :'dd')}`;
        });
        return newData;
    }

    /***
     * 최댓값과 문자열로 key를 받아 범위안의 결과값을 반환합니다.
     * @param max
     * @param key
     */
    const setMaxRange = (max, key) => {
        switch(true) {
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
     * @param data
     */
    const drawWeekPath = (data): string => {
        let html = '';
        if(data) {
            data.map(({value}, index) => {
                html += `${index == 0 ? 'M' : 'L'} ${(((outerWidth - (paddingLeft + paddingRight)) / xTicks) * index) + xStartText}, ${yStartPoint - makePoint(value, setMaxRange(max, 'max'))} `;
            })
        }
        return html;
    }

    const drawLabelPath = (x: number, y: number): string => {
        return `M${(outerWidth / 2) - x}, ${yStartPoint + y} L${(outerWidth / 2) - (x - 10)}, ${yStartPoint + y}`
    }

    const drawMainLine = (): string => {
        return `M${xStartPoint}, ${yStartPoint} H${xAxisLength}`
    }

    const drawSubLine = (index): string => {
        return `M${xStartPoint}, ${yStartPoint - (y * index)} L${xAxisLength} ${yStartPoint - (y * index)}`
    }

    const makePoint = (value: number, max: number ) => {
        return (yAxisLength / max) * value;
    }

    return (
        <Wrapper>
            <svg width={outerWidth} height={outerHeight}>
                <Title x={0} y={14}>
                    {title}
                </Title>
                {setMaxRange(max, 'range').map((value, index) => (
                  <g key={index}>
                      <SubLine d={drawSubLine(index)} />
                      <StyledText x={xTextMargin} y={yStartPoint - (y * index) + yTextAxis} textAnchor='end'>
                          {value}
                      </StyledText>
                  </g>
                ))}
                <MainLine d={drawMainLine()} />
                {formatDate(thisWeekData).map((day, index) => (
                  <g key={index}>
                      <StyledText x={(((outerWidth - (paddingLeft + paddingRight)) / xTicks) * index) + xStartText} y={yStartPoint + yTextMargin}>
                          {day}
                      </StyledText>
                  </g>
                ))}
                <LastWeekPath d={drawWeekPath(lastWeekData)} />
                <ThisWeekPath d={drawWeekPath(thisWeekData)} />
                <g>
                    <StyledThisLabelPath d={drawLabelPath(57, 44)}></StyledThisLabelPath>
                    <StyledText x={(outerWidth / 2) - 42} y={yStartPoint + (yTextMargin * 3)}>이번주</StyledText>
                    <StyledLastLabelPath d={drawLabelPath(-10, 44)}></StyledLastLabelPath>
                    <StyledText x={(outerWidth / 2) + 26} y={yStartPoint + (yTextMargin * 3)}>지난주</StyledText>
                </g>
            </svg>
        </Wrapper>
    )
}

export default LineChart;