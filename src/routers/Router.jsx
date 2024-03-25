import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from '../pages/login/Login';
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/Home';
import ReadSemester from '../pages/admin/semester/ReadSemester';
import AdminHome from '../pages/admin/AdminHome';
import ReadUser from '../pages/admin/user/ReadUser';
import CreateSemester from '../pages/admin/semester/CreateSemester';
import DetailSemester from '../pages/admin/semester/DetailSemester';
import MaketingHome from '../pages/maketingmanager/MaketingHome';

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
						element: <Home />,
					},
					{
						path: 'maketingmanager',
						element: <MaketingHome />,
					},
					{
						path: 'admin',
						children: [
							{
								path: '',
								element: <AdminHome />,
							},
							{
								path: 'user',
								element: <ReadUser />,
							},
							{
								path: 'semester',
								children: [
									{
										path: '',
										element: <ReadSemester />,
									},
									{
										path: 'create',
										element: <CreateSemester />,
									},
									{
										path: 'semesterId',
										element: <DetailSemester />,
									},
								],
							},
						],
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
