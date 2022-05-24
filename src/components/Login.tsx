import React from "react";
import { useQuery } from "react-query";

interface LoginProps {
  loading: boolean
}

const Login: React.RC<LoginProps> = ({loading}) => {
  return (
    <>
      {}
      {loading ? '로딩중' : '로그인'}
    </>
  );
};

export default Login;