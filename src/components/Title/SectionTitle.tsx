import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';

interface SectionTitleProps {
  title?: string;
  count?: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px 6px;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  padding-right: 6px;
  font-size: 20px;
  line-height: 27px;
`

const Count = styled.span`
  color: #0075EF;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
`

function SectionTitle ({children, ...props}: PropsWithChildren<SectionTitleProps>) {
  const {title, count} = props

  return (
    <Wrapper>
      {count ? (
        <TitleWrapper>
          <Title>{title}</Title>
          <Count>{count}</Count>
        </TitleWrapper>
      ) : (<Title>{title}</Title>)}

      {children}
    </Wrapper>
  )
}

export default SectionTitle;