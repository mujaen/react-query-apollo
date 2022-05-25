import React from 'react';
import { useRecoilState } from 'recoil';
import { startDateState } from 'atoms'

interface LoginProps {
  loading: boolean
}

const Login: React.RC<LoginProps> = ({loading}) => {
  const [startDate, setStartDate] = useRecoilState(startDateState);

  const handleChange = (event) => {
    setStartDate(event.target.value);
  };

  return (
    <>
      <input type="text" value={startDate} onChange={handleChange}></input>
      {startDate}
      {loading ? '로딩중' : '로그인'}
    </>
  );
};

export default Login;