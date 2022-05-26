import React, {useRef, Suspense} from 'react';
import {useResetRecoilState, useSetRecoilState} from "recoil";
import {userRepoInfoState, getUserRepoInfo} from 'store/User';
import Mypage from 'components/Mypage';


const MyPage:React.FC = () => {
  const setUserInfo = useSetRecoilState(userRepoInfoState);
  const resetUserInfo = useResetRecoilState(getUserRepoInfo);
  const userRef = useRef();
  const repoRef = useRef();

  const handleClick = () => {
    const user = userRef.current.value;
    const repo = repoRef.current.value;

    const info = {user, repo};
    setUserInfo(info);
  };

  const resetClick = () => {
    resetUserInfo();
  };

  return (
    <>
      <input type="text" ref={userRef}/>
      <input type="text" ref={repoRef}/>
      <button type="button" onClick={handleClick}>가져오기</button>
      <button type="button" onClick={resetClick}>Reset</button>
      <Suspense>
        <Mypage/>
      </Suspense>
    </>
  );
};

export default MyPage;