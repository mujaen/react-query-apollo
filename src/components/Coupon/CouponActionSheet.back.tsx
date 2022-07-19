import { iconCloseBlack, iconCouponEmpty } from 'assets/icons';
// import ActionSheet from 'components/ActionSheet';
import ActionSheet from './ActionSheet';
import BodyScrollLockContainer from 'components/BodyScrollLockContainer';
import Button from 'components/Button';
import NewModal from 'components/Modal/New';
import PlaceHolderEmpty from 'components/PlaceHolder/Empty';
import { makeSelectIsSmall } from 'containers/App/selectors';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import filters from 'utils/filters';
import runTrackingCode from 'utils/trackingCode';
import { PurchaseDataContext } from '../../../contexts/PurchaseDataProvider';
import { CouponData } from '../../../models/CouponList';
import CouponCard from './CouponCard';
import { Button as CouponButton, TextField } from 'components/FDS';
import { MY_COUPON_PAGE_WORD } from 'strings';
import useBottomToast from 'hooks/useBottomToast';
import { UseSerialResponse } from 'types/api';

interface CouponActionSheetProps {
  couponDataList: CouponData[];

  onClose: () => void;
  onCouponListRefetch: () => void;
  onCoupon: (serial: string) => Promise<UseSerialResponse | undefined>;
}

const InputWrapper = styled.form`
  display: flex;
  justify-content: space-between;

  > div {
    flex-grow: 1;
  }
  > button {
    align-self: flex-end;

    height: 100%;
    margin-left: 8px;
  }
`;

const UsableIssuedCouponTitle = styled.strong`
  display: block;
  margin-top: 20px;

  color: #333333;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.03em;
`;

const ActionSheetContent = styled(BodyScrollLockContainer)`
  height: 100%;
  padding: 0 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0 16px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.54px;
  font-weight: bold;
  color: #333;
`;

const CloseButton = styled.button`
  width: 24px;
  padding: 0;

  img {
    width: 100%;
  }
`;

const ContentWrapper = styled.div<{ isSmall?: boolean }>`
  max-width: 100%;
  margin: 0 auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  > div {
    margin-top: 20px;
  }

  ${({ isSmall }) => (isSmall ? 'min-width: 335px' : 'width: 335px')};
`;

const ButtonWrapper = styled.div`
  padding-top: 10px;
  background-color: white;
  box-shadow: 0 -10px 30px -10px rgba(0, 0, 0, 0.08);
`;

const CouponActionSheet: React.FC<CouponActionSheetProps> = ({
  couponDataList,
  onClose,
  onCouponListRefetch,
  onCoupon,
}) => {
  const isSmall: boolean = useSelector(makeSelectIsSmall());
  const [isFetchLoaded, setIsFetchLoaded] = useState(false);
  const couponDataListLength = useMemo(() => couponDataList.length, []);
  const [isResisterCoupon, setIsResisterCoupon] = useState<boolean>(false);
  const {
    data: { userSelectCoupon },
    updateUserSelectCoupon,
  } = useContext(PurchaseDataContext);
  const raiseToast = useBottomToast();
  const [serial, setSerial] = useState<string>('');
  const [currentSelectCoupon, setCurrentSelectCoupon] = useState<
    CouponData | undefined
  >(userSelectCoupon);
  const disabledButton = useMemo(
    () => !userSelectCoupon && !currentSelectCoupon,
    [userSelectCoupon, currentSelectCoupon],
  );

  const handleOnClickApply = useCallback(() => {
    updateUserSelectCoupon(currentSelectCoupon);
    onClose();

    if (currentSelectCoupon) {
      runTrackingCode('ClickCouponApply');
    }
  }, [currentSelectCoupon, updateUserSelectCoupon]);

  const makeOnClickCard = useCallback(
    (coupon: CouponData) => () => {
      setCurrentSelectCoupon(
        currentSelectCoupon?.id === coupon.id ? undefined : coupon,
      );
    },
    [currentSelectCoupon, couponDataList],
  );

  const handleRegisterCoupon = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      const response = await onCoupon(serial);

      if (response?.success) {
        raiseToast(MY_COUPON_PAGE_WORD.REGISTER_SUCCESS);
        setIsResisterCoupon(true);
        setIsFetchLoaded(false);
        setCurrentSelectCoupon(undefined);
      }
    },
    [serial, onCoupon],
  );

  useEffect(() => {
    runTrackingCode('ViewCoupon');
  }, []);

  useEffect(() => {
    if (isResisterCoupon) {
      onCouponListRefetch();
      setIsResisterCoupon(false);
      setIsFetchLoaded(true);
    }
  }, [couponDataList, isResisterCoupon]);

  useEffect(() => {
    onCouponListRefetch();
    if (isFetchLoaded && couponDataListLength !== couponDataList.length) {
      if (couponDataList[0]?.benefit > 0) {
        setCurrentSelectCoupon(couponDataList[0]);
      }
    }
  }, [couponDataList, isFetchLoaded]);

  const renderContent = () => (
    <>
      <div>
        <InputWrapper onSubmit={handleRegisterCoupon}>
          <TextField
            value={serial}
            placeholder={MY_COUPON_PAGE_WORD.INPUT_PLACEHOLDER}
            onChange={setSerial}
          />
          <CouponButton
            type="submit"
            componentType="Outlined"
            size="Medium"
            disabled={!serial}
          >
            {MY_COUPON_PAGE_WORD.INPUT_BTN_LABEL}
          </CouponButton>
        </InputWrapper>
      </div>
      <>
        <UsableIssuedCouponTitle>보유한 쿠폰</UsableIssuedCouponTitle>
        <ContentWrapper isSmall={isSmall}>
          {couponDataList.map(couponData => (
            <CouponCard
              key={`CouponCard-${couponData.id}`}
              selected={currentSelectCoupon?.id === couponData.id}
              couponData={couponData}
              onClick={makeOnClickCard(couponData)}
            />
          ))}
          {couponDataList.length === 0 && (
            <PlaceHolderEmpty iconSrc={iconCouponEmpty} marginTop="100px">
              적용 가능한 쿠폰이 없어요.
            </PlaceHolderEmpty>
          )}
        </ContentWrapper>
      </>

      <ButtonWrapper>
        <Button
          width="100%"
          height="54px"
          bgColor={disabledButton ? '#dddddd' : '#3397ff'}
          color="white"
          fontSize="13px"
          disabled={disabledButton}
          onClick={handleOnClickApply}
        >
          {currentSelectCoupon &&
            `-${filters.formatNumber(currentSelectCoupon.benefit)}원 `}
          적용하기
        </Button>
      </ButtonWrapper>
    </>
  );

  return isSmall ? (
    <ActionSheet noHeader onClose={onClose}>
      <ActionSheetContent scrollable>
        <Header>
          <Title>쿠폰 선택</Title>
          <CloseButton type="button" onClick={onClose}>
            <img src={iconCloseBlack} alt="close-button" />
          </CloseButton>
        </Header>
        {renderContent()}
      </ActionSheetContent>
    </ActionSheet>
  ) : (
    <NewModal title="쿠폰" contentPadding="0 20px 20px 20px" onClose={onClose}>
      {renderContent()}
    </NewModal>
  );
};

export default CouponActionSheet;
