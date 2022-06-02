import React, {lazy} from 'react';
import {createRoot} from 'react-dom/client';
import {RecoilRoot} from "recoil";
import { QueryClient, QueryClientProvider} from 'react-query';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
const Home = lazy(() => import('pages/HomePage'));
const Login = lazy(() => import('pages/LoginPage'));
const Mypage = lazy(() => import('pages/MyPage'));

const rootNode = document.getElementById('app');
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Router>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/mypage' element={<Mypage />} />
              </Routes>
            </Router>
          </RecoilRoot>
        </QueryClientProvider>
    );
};


const root = createRoot(rootNode);
root.render(<App />);