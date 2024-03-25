import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import './AdminPage.css';

const { Title, Text } = Typography;

function AdminHome() {
  return (
    <>
      <Title level={1} className="responsive-title" style={{ textAlign: 'center' }}>Hello Admin</Title>
      <Typography.Paragraph className="responsive-text" style={{ textAlign: 'center' }}>
        You can manage <Link to="/admin/user" style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'black' }}>user</Link> or <Link to="/admin/semester" style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'black' }}>semester</Link> now.
      </Typography.Paragraph>
      <Typography.Paragraph style={{ textAlign: 'center' }}>
        <img src="https://res.cloudinary.com/dxvlo5gta/image/upload/v1710751368/admin.jpg" alt="Admin" style={{ display: 'block', margin: 'auto', maxWidth: '100%' }} />
      </Typography.Paragraph>
    </>
  );
}

export default AdminHome;
