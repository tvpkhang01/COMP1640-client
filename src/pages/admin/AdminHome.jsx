import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function AdminHome() {
  return (
    <>
      <Title level={1} style={{ textAlign: 'center', fontSize: '32px' }}>Hello Admin</Title>
      <Typography.Paragraph style={{ textAlign: 'center', fontSize: '18px' }}>
        You can manage <Link to="/admin/user" style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'black' }}>user</Link> or <Link to="/admin/semester" style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'black' }}>semester</Link> now.
      </Typography.Paragraph>
      <Typography.Paragraph style={{ textAlign: 'center' }}>
        <img src="https://res.cloudinary.com/dxvlo5gta/image/upload/v1710751368/admin.jpg" alt="Admin" style={{ display: 'block', margin: 'auto' }} />
      </Typography.Paragraph>
    </>
  );
}

export default AdminHome;
