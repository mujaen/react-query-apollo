import React from 'react';
import styled, { css } from 'styled-components';
import { CouponData } from '../../../models/CouponList';

interface CouponCardProps {
  selected?: boolean;
  couponData: CouponData;

  onClick: () => void;
}

const Wrapper = styled.div<{ isSelected?: boolean; disabled: boolean }>`
  position: relative;
  overflow-x: hidden;
  min-height: 150px;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #999999;
      background-color: #f4f4f4;
      cursor: not-allowed;
    `}

  ::before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 18px;
    border: 1px solid
      ${({ isSelected }) => (isSelected ? '#3397ff' : '#dddddd')};
    position: absolute;
    left: -9px;
    top: 65px;
    background-color: white;
  }
  ::after {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 18px;
    border: 1px solid
      ${({ isSelected }) => (isSelected ? '#3397ff' : '#dddddd')};
    position: absolute;
    right: -9px;
    top: 65px;
    background-color: white;
  }
`;

const ContentWrapper = styled.div<{ isSelected?: boolean; disabled?: boolean }>`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;

  border: 1px solid ${({ isSelected }) => (isSelected ? '#3397ff' : '#dddddd')};
`;

const Name = styled.div`
  font-size: 14px;
  line-height: 24px;
`;

const Conditions = styled.div`
  margin-top: 20px;
  color: #9b9b9b;
  font-size: 10px;
  line-height: 18px;
  word-break: keep-all;
`;

const DiscountPrice = styled.div`
  align-self: flex-end;
  font-weight: bold;
  line-height: 28px;
  font-size: 16px;
`;

const SelectedMark = styled.span`
  float: right;
  color: #009aff;
  font-weight: bold;
`;

const CouponCard: React.FC<CouponCardProps> = ({
  selected,
  couponData,
  onClick,
}) => (
  <Wrapper
    isSelected={selected}
    onClick={couponData.benefit <= 0 ? undefined : onClick}
    disabled={couponData.benefit <= 0}
  >
    <ContentWrapper isSelected={selected}>
      <div>
        <Name>
          {couponData.title}
          {selected && <SelectedMark>선택됨</SelectedMark>}
        </Name>
        <DiscountPrice>{couponData.discountValueText}</DiscountPrice>
      </div>
      <Conditions>{couponData.description}</Conditions>
    </ContentWrapper>
  </Wrapper>
);

export default CouponCard;
