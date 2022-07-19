import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { drawLineChart } from 'utils/chart'

interface LineChartDataProps {
  date?: string
  value?: number
}

interface LineChartProps {
  data: LineChartDataProps[],
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

function LineChart({ data }: LineChartProps) {
  const [option, setOption] = useState({
    fromDate: new Date(),
    points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
    line: 3,
    x: 7,
  })

  const buildLineChart = useMemo(() => {
    return drawLineChart(option)
  }, [option])

  console.log(buildLineChart);

  return (
    <Wrapper>
      <svg width={outerWidth} height={outerHeight}>
        <g>
          <Title x={0} y={14}>
            이번주 트렌드
          </Title>
        </g>
      </svg>
    </Wrapper>
  )
}

export default LineChart