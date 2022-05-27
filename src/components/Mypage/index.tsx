import React from "react";
import {useRecoilValue} from 'recoil';
import {getUserRepoInfo, userProfileState} from 'store/User';
import {getLocalStorage} from 'utils/recoil';

const Mypage:React.FC = () => {
  const userRefoInfo = useRecoilValue(getUserRepoInfo);
  const userProfile = useRecoilValue(userProfileState);
  const userPro = getLocalStorage('profile');
  return (
    <>
      <div>{userProfile ? '있' : '없'}</div>
      <div>{userRefoInfo}</div>
      <div>{userPro}</div>
    </>
  );
};

export default Mypage;