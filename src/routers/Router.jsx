import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from '../pages/login/Login';
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../components/layout/MainLayout';
import AdminRouter from '../pages/admin/AdminRouter'
import MMRouter from '../pages/maketingmanager/MMRouter';

const Router = createBrowserRouter([
	{
		path: '',
		element: <Outlet />,
		errorElement: <ErrorPage />,
		children: [
			{
				element: <MainLayout />,
				children: [
					{
						path: 'mm',
						children: [...MMRouter]
					},
					{
						path: 'admin',
						children: [...AdminRouter],
					},
				],
			},
			{
				path: 'login',
				element: <Login />,
			},
			
		],
	},
	
]);

export default Router;
