import React from 'react';
import {createRoot} from 'react-dom/client';
import {RecoilRoot} from "recoil";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import Login from "components/Login";
const rootNode = document.getElementById('app');
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Example />
            <Login />
          </RecoilRoot>
        </QueryClientProvider>
    );
};

const Example = () => {
    const { isLoading, error, data, isSuccess } = useQuery('repoData', () =>
        axios.get('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.data)
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <p>{isSuccess ? '예' : '아니오'}</p>
            <h1>{data.created_at}</h1>
            <p>{data.description}</p>
        </div>
    );
};

const root = createRoot(rootNode);
root.render(<App />);