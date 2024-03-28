import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import axios from 'axios';
import Router from './routers/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

axios.defaults.baseURL = 'http://localhost:3000/api';
ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={Router} />
		</Suspense>
	</QueryClientProvider>
);
