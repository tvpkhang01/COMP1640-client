import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const backgroundImageURL = 'https://res.cloudinary.com/dh6dvndzn/image/upload/v1709633495/imgLogin.png';


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleLogin = () => {
    // Xử lý đăng nhập, có thể sử dụng các giá trị trong state như name, email, password, mssv, role
  };


const handleGuestLogin = () => {
  // Xử lý đăng nhập với tài khoản khách ở đây
};

  return (
    <div className="LoginPage">
      <div className="LoginPage background-image">
</div>
      <h1>Login with account google</h1>
      
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
   
      <button onClick={handleLogin}>Login</button>

      <div className="line"></div>

      
      <button className="login-with-guest" onClick={handleGuestLogin}>Login with Guest Account</button>

      
    </div>
  );
}

export default LoginPage;
