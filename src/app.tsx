import React, {lazy} from 'react';
import {createRoot} from 'react-dom/client';
import {RecoilRoot} from "recoil";
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider} from 'react-query';
import { GlobalStyles, themeStyles } from 'styles'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from 'pages/HomePage';
import Login from 'pages/LoginPage';
import Mypage from 'pages/MyPage';

const rootNode = document.getElementById('app');
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={themeStyles}>
            <RecoilRoot>
              <GlobalStyles />
              <Router>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/mypage' element={<Mypage />} />
                </Routes>
              </Router>
            </RecoilRoot>
          </ThemeProvider>
        </QueryClientProvider>
    );
};


const root = createRoot(rootNode);
root.render(<App />);