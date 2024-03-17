import React, { useState } from 'react';
import { Row, Col, Typography, Input, Button, Space } from 'antd';
import './LoginPage.css';

const { Title, Text } = Typography;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
  };

  const handleGuestLogin = () => {
    // Xử lý đăng nhập với tài khoản khách ở đây
  };

  return (
    <Row className="Row" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Row className="background-image"></Row>
        <Title level={2}>Login with account google</Title>

        <Row gutter={[0, 10]} className="Row">
          <Col span={24} style={{ textAlign: 'center', marginBottom: '1px' }}>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              style={{ width: '80%', maxWidth: '350px', padding: '15px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '10px', opacity: '0.8' }}
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

          <Col span={24} style={{ marginBottom: '2px', textAlign: 'center', position: 'relative' }}>
            <Button
              type="primary"
              onClick={handleLogin}
              style={{
                width: '100%',
                maxWidth: '350px',
                padding: '20px',
                marginBottom: '20px',
                boxSizing: 'border-box',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                marginBottom: '10px',

              }}
            >
              Login
              
            </Button>
          
          </Col>
          <Col span={24} style={{ marginBottom: '2px', textAlign: 'center', marginTop: '-10px'}}>
            <Space direction="horizontal">
            <a href="#" className="forgot-password" style={{color: 'black'}}>Forgot Password?</a>
            </Space>
            <div
      style={{
        position: 'absolute',
        width: '24%',
        borderBottom: '2px solid rgba(0, 0, 0, 0.3)',
        bottom: '-20px',
        left: '50%',
        transform: 'translateX(-50%)', 
      }}
    ></div>
          </Col>
          <Col span={24} style={{ marginBottom: '2px', textAlign: 'center', position: 'relative' }}>
            <Button
              type="default"
              className="login-with-guest"
              onClick={handleGuestLogin}
              style={{
                width: '100%',
                maxWidth: '350px',
                padding: '20px',
                top: '30px',
                marginBottom: '20px',
                boxSizing: 'border-box',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              Login with Guest Account
              
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default LoginPage;
