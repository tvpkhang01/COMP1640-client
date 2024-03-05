import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const backgroundImageURL = 'https://res.cloudinary.com/dh6dvndzn/image/upload/v1709633495/imgLogin.png';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mssv, setMssv] = useState('');
  const [role, setRole] = useState(''); // State để lưu trạng thái của role

  const handleRegisterClick = () => {
    // Điều hướng đến trang đăng ký
    // Bạn có thể sử dụng thư viện định tuyến như `react-router` để xử lý điều hướng
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleLogin = () => {
    // Xử lý đăng nhập, có thể sử dụng các giá trị trong state như name, email, password, mssv, role
  };

const handleGoogleLogin = () => {
  // Xử lý đăng nhập bằng Google ở đây
  // Bạn có thể sử dụng các thư viện xác thực như Firebase để thực hiện việc này
};

const handleGuestLogin = () => {
  // Xử lý đăng nhập với tài khoản khách ở đây
};

  return (
    <div className="LoginPage">
      <div className="LoginPage background-image">
  {/* Các phần tử nội dung khác ở đây */}
</div>
      <h1>Login with account google</h1>
      {/* <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" /> */}
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
      {/* <input type="text" id="mssv" value={mssv} onChange={(e) => setMssv(e.target.value)} placeholder="Enter your MSSV" /> */}
      {/* <select id="role" value={role} onChange={handleRoleChange}>
        <option value="">Select Role</option>
        <option value="manager">Manager</option>
        <option value="student">Student</option>
      </select> */}
      <button onClick={handleLogin}>Login</button>

      <div className="line"></div>

      
      <button className="login-with-google" onClick={handleGoogleLogin}>Login with Google</button>
      <button className="login-with-guest" onClick={handleGuestLogin}>Login with Guest Account</button>

      <Link to="/register" className="register-button disabled" onClick={handleRegisterClick}>
        Register
      </Link>
    </div>
  );
}

export default LoginPage;
