import React, {useEffect} from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

interface LineChartDataProps {
    date?: string;
    value?: number;
}

interface LineChartProps {
    data: LineChartDataProps[]
}

const Wrapper = styled.div`
    padding: 50px;
    border: 1px solid #000;
`

const StyleSvg = styled.div`
    text {
      fill: #777;
    }
`

const MainLine = styled.path`
    stroke: black;
    stroke-width: 1;
    shape-rendering : crispEdges;
    fill: none;
`

const SubLine = styled.path`
    stroke: gray;
    stroke-width: 1;
    shape-rendering : crispEdges;
    fill: none;
`

const ThisWeek = styled.path`
    stroke: rgb(76, 209, 128);
    stroke-width: 1;
    fill: none;
`


function LineChart({data}:LineChartProps) {
    const initialOptions = {
        width: 800,
        height: 400
    }
    const SVG_CHART_WIDTH = 800;
    const SVG_CHART_HEIGHT = 400;

    //최댓값
    const max = Math.max(...data.map(day => day.value || 0), 0);

    const x = 100;
    // x 중심선 너비
    const xAxisLength = SVG_CHART_WIDTH - x * 2;
    const y = 50;

    // y 중심선 너비
    const yAxisLength = SVG_CHART_HEIGHT - y * 2;
    const xAxisY = y + yAxisLength;
    const yTicks = 5;


    // useEffect(() => {
    //     window.addEventListener("resize", console.log(svgWrapperRef.current.getBoundingClientRect()), true);
    // }, []);
    const thisWeekData = data.slice(0, 7).reverse();
    const lastWeekdata = data.slice(7).reverse();
    const formatDate = (data): string[] => {
        const newData = new Array();
        data.map((_, index) => {
            newData[index] = `${format(parseISO(data[index].date), index == 0 ? 'M/d' :'dd')}`;
        });
        return newData;
    }

    const makeMaxRange = (max): string[] => {
        const newRange = new Array();
        const unit = Math.ceil(max) / yTicks;
        Array.from({length: yTicks}).map((_, index) => {
           newRange[index] = Math.ceil(unit * index);
        });

        return newRange;
    }

    const makeChartPoint = () => {

    }

    const drawThisWeekPath = (): React.ReactNode => {
        const h = '50';

        return `M${x},${h} L${x * 2} 60, L${x * 3} ${h}, L${x * 4} 30`;
    }

    const drawMainLine = (): string => {
        return `M${x}, ${xAxisY} H${x + xAxisLength}`
    }

    const drawSubLine = (index): string => {
        return `M${x}, ${xAxisY - (y * index)} L${x + xAxisLength} ${xAxisY - (y * index)}`
    }

    return (
        <Wrapper>
            {data?.map(({date, value}, index) => (
                <div key={index}>{value}</div>
            ))}
            <StyleSvg>
                <svg width={SVG_CHART_WIDTH} height={SVG_CHART_HEIGHT}>
                    {makeMaxRange(max).map((value, index) => (
                        <g key={index}>
                            <SubLine d={drawSubLine(index)} />
                            <text x={x - 10} y={xAxisY - (y * index) + 5} textAnchor='end'>
                                {value}
                            </text>
                        </g>
                    ))}
                    <MainLine d={drawMainLine()} />
                    {formatDate(thisWeekData).map((day, index) => (
                        <g key={index}>
                            <text x={x + ((SVG_CHART_WIDTH - x * 2) / 6) * index} y={xAxisY + 28}>
                                {day}
                            </text>
                        </g>
                    ))}
                    {/*<ThisWeekPath d="M100,50 H200" />*/}
                    <ThisWeek d={drawThisWeekPath()} />
                </svg>
            </StyleSvg>
        </Wrapper>
    )
}

export default LineChart;