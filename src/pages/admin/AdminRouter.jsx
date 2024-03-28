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
		element: <ReadSemester />,
	},
];

export default AdminRouter;
