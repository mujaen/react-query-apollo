import React, {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import {getUserRepoInfo, userProfileState} from 'store/User';
import {requestPost} from 'utils/requestAxios';

const Mypage:React.FC = (perPage: number, curruntPage: number) => {
  const userRefoInfo = useRecoilValue(getUserRepoInfo);
  const userProfile = useRecoilValue(userProfileState);

  useEffect(() => {
      requestPost('https://jsonplaceholder.typicode.com/posts', {
          perPage: 20,
          curruntPage: 30
      });
  }, [])

  return (
    <>
      <div>{userProfile}</div>
      <div>{userRefoInfo}</div>
    </>
  );
};

export default Mypage;