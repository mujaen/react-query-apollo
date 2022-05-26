import React from "react";
import {useRecoilValue} from 'recoil';
import {getUserRepoInfo} from 'store/User';

const Mypage:React.FC = () => {
  const userRefoInfo = useRecoilValue(getUserRepoInfo);
  return <>{userRefoInfo}</>;
};

export default Mypage;