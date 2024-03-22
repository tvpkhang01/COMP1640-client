import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from '../pages/login/Login';
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../components/layout/MainLayout';
import MMHome from '../pages/mm/MMHome';
import AdminRouter from '../pages/admin/AdminRouter'

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
						path: '',
						element: <MMHome />,
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
