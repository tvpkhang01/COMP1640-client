import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mssv, setMssv] = useState('');
  const [role, setRole] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleRegister = () => {
    // Xử lý đăng ký, sử dụng các giá trị trong state như name, email, password, confirmPassword, mssv, role
  };

  return (
    <div className="Register">
  {/* Các phần tử nội dung khác ở đây */}
      <h1>Register</h1>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
      <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
      <input type="text" id="mssv" value={mssv} onChange={(e) => setMssv(e.target.value)} placeholder="Enter your MSSV" />

      <select id="role" value={role} onChange={handleRoleChange}>
        <option value="">Select Role</option>
        <option value="manager">Manager</option>
        <option value="student">Student</option>
      </select>

      <button onClick={handleRegister}>Register</button>

      <div className="login-link">
        <Link to="/login">Back to login</Link>
      </div>
    </div>
  );
}

export default Register;
