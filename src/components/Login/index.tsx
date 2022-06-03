import React from 'react';

interface LoginProps {
  loading: boolean;
  [others: string]: unknown;
}

const Login: React.RC<LoginProps> = ({loading, ...props}) => {
  return (
    <>
      {props.title}
      {loading ? '로딩중' : '로그인'}
    </>
  );
};

export default Login;