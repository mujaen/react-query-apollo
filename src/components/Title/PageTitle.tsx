import React, {PropsWithChildren} from "react";
import styled from 'styled-components';


interface PageTitleProps {
  title?: string;
  count?: string;
  isDetailPage?: boolean;
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 64px 20px 16px;
`

const DetailHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 44px 0 14px;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  padding-right: 8px;
  font-size: 24px;
  line-height: 32px;
`

const DetailTitle = styled.h1`
  width: calc(100% - 100px);
  font-size: 18px;
  line-height: 44px;
  text-align: center;
`

const Count = styled.span`
  color: #0075EF;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`

const MyPageIcon = styled.div`
  
`

const PrevButton = styled.button`
  width: 50px;
`


function PageTitle({children, ...props}: PropsWithChildren<PageTitleProps>) {
   const {title, count, isDetailPage} = props;

  const handleClickMyPageIcon = (): void => {

  };

  const handleClickPrevButton = (): void => {

  };

  return (
    <>
      {isDetailPage ? (
        <DetailHeader>
          <PrevButton onClick={handleClickPrevButton}>뒤로</PrevButton>
          <DetailTitle>{title}</DetailTitle>
        </DetailHeader>
      ): (
        <Header>
          <TitleWrapper>
            <Title>{title}</Title>
            {count ? (<Count>{count}</Count>) : children}
          </TitleWrapper>
          <MyPageIcon onClick={handleClickMyPageIcon}>
            mypage
          </MyPageIcon>
        </Header>
      )}
    </>
  )
}

export default PageTitle;