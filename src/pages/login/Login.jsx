import React, { useState } from 'react';
import { Row, Col, Typography, Input, Button, Select, Divider } from 'antd';
import './Login.css';

const { Title } = Typography;
const { Option } = Select;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null);

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
  };

  const handleRoleChange = (value) => {
    setRole(value);
  };

  return (
    <Row className="Row" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Row className="background-image"></Row>
        <Title level={2}>Login with your account</Title>

        <Row gutter={[0, 10]} className="Row">
          <Col span={24} style={{ textAlign: 'center', marginBottom: '1px' }}>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmaeeeil(e.target.value)}
              placeholder="Enter your Email"
              style={{ width: '100%', maxWidth: '350px', padding: '15px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '10px', opacity: '0.8' }}
            />
          </Col>
          
          <Col span={24} style={{ textAlign: 'center', marginBottom: '-10px', marginTop: '-10px' }}>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              style={{ width: '100%', maxWidth: '350px', padding: '15px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '10px', opacity: '0.8' }}
            />
          </Col>
          <Col span={24} style={{ textAlign: 'center', marginBottom: '2px' }}>
            <Select
              value={role}
              allowClear={true}
              placeholder="Select a role"
              onChange={handleRoleChange}
              style={{ 
                width: '100%', 
                maxWidth: '350px',
                height: '50px', 
                marginBottom: '18px', 
                borderRadius: '7px', 
                opacity: '0.8', 
                textAlign: 'left',
                marginTop: '5px',
                border: '1px solid #000', 
              }}
              dropdownStyle={{ textAlign: 'left', }}
            >
              <Option value="IT">IT</Option>
              <Option value="Business">Business</Option>
            </Select>
          </Col>

          <Col span={24} style={{ marginBottom: '2px', textAlign: 'center', position: 'relative' }}>
            <Button
              type="primary"
              onClick={handleLogin}
              style={{
                width: '100%',
                maxWidth: '350px',
                padding: '20px',
                boxSizing: 'border-box',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '-13px'
              }}
            >
              Login
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default LoginPage;
