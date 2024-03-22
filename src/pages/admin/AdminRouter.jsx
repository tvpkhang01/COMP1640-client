import ReadSemester from './semester/ReadSemester';
import AdminHome from './AdminHome';
import ReadUser from './user/ReadUser';
import CreateSemester from './semester/CreateSemester';
import DetailSemester from './semester/DetailSemester';


const AdminRouter = [
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
];

export default AdminRouter;
