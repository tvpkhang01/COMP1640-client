import ReadSemester from './semester/ReadSemester';
import AdminHome from './AdminHome';
import ReadUser from './user/ReadUser';
import CreateSemester from './semester/CreateSemester';
import UpdateSemester from './semester/UpdateSemester';


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
				element: <UpdateSemester />,
			},
		],
	},
];

export default AdminRouter;
