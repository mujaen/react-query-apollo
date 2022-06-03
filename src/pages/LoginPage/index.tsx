import React from 'react';
import Login from 'components/Login';
import Content from 'components/AppLayout/Content';

const LoginPage: React.FC = ({}) => {
  return (
    <Content template='Search' title='정산관리'>
      <Login title='정산관리'/>
    </Content>
  );
};

export default LoginPage;