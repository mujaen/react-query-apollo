import React from "react";
import {useRecoilValue} from 'recoil';
import {getUserRepoInfo, userProfileState} from 'store/User';

const Mypage:React.FC = () => {
  const userRefoInfo = useRecoilValue(getUserRepoInfo);
  const userProfile = useRecoilValue(userProfileState);
  return (
    <>
      <div>{userProfile}</div>
      <div>{userRefoInfo}</div>
    </>
  );
};

export default Mypage;