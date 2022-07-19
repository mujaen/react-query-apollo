import React, { useCallback, useContext, useMemo, useState } from 'react';
import styled from 'styled-components';
import filters from 'utils/filters';
import runTrackingCode from 'utils/trackingCode';
import useQueryCoupons from '../../../hooks/useQueryCoupons';
import { PurchaseDataContext } from '../../../contexts/PurchaseDataProvider';
import InnerActionButton from '../../InnerActionButton';
import SubTitle from '../../SubTitle';
import CouponActionSheet from './CouponActionSheet';
import useMutationCoupon from 'containers/PurchasePage/hooks/useMutationCoupon';

const CouponChoiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.48px;
  margin-top: 8px;
`;

const CouponCount = styled.div`
  color: #aaaaaa;
`;

const CouponAppliedAmount = styled.div`
  color: #333333;
`;

const PurchaseDiscountSectionCoupon: React.FC = () => {
  const {
    data: { priceData, checkout, userSelectCoupon },
  } = useContext(PurchaseDataContext);

  const { couponList, refetchCouponList } = useQueryCoupons(
    checkout?.draftTargetItemForCouponInput || [],
  );

  const registerCoupon = useMutationCoupon(refetchCouponList);

  const [isVisibleCouponActionSheet, setIsVisibleCouponActionSheet] = useState<
    boolean
  >(false);

  const usedAllPoint = useMemo(
    () =>
      priceData.originPrice ===
      priceData.usedPoint + priceData.usedWelfarePoint,
    [priceData],
  );

  const handleOnOpenCouponSheet = useCallback(() => {
    setIsVisibleCouponActionSheet(true);

    runTrackingCode('ClickCoupon');
  }, []);
  const handleOnCloseCouponSheet = useCallback(() => {
    setIsVisibleCouponActionSheet(false);
  }, []);

  return (
    <div>
      <SubTitle>쿠폰</SubTitle>
      <CouponChoiceWrapper>
        {userSelectCoupon ? (
          <CouponAppliedAmount>
            {filters.formatNumber(userSelectCoupon.benefit)}원
          </CouponAppliedAmount>
        ) : (
          <CouponCount>
            <span>전체 {couponList?.totalCount || 0}장</span>
            <span>, 사용가능 {couponList?.usableCount || 0}장</span>
          </CouponCount>
        )}
        <InnerActionButton
          disabled={usedAllPoint}
          onClick={handleOnOpenCouponSheet}
        >
          쿠폰 선택
        </InnerActionButton>
      </CouponChoiceWrapper>

      {isVisibleCouponActionSheet && (
        <CouponActionSheet
          couponDataList={couponList?.usableCouponDataList || []}
          onCouponListRefetch={refetchCouponList}
          onCoupon={registerCoupon}
          onClose={handleOnCloseCouponSheet}
        />
      )}
    </div>
  );
};

export default PurchaseDiscountSectionCoupon;
