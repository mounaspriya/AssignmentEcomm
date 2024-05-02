import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setIsLoggedIn(true);
  // };
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    // For demonstration purposes, assume login is successful
    // You can replace this with actual login logic using backend authentication

    // Redirect to dashboard
    navigate('/dashboard');
  };

  const handleRegisterClick = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="left">
  <img
    src="/img.01.jpg"
    alt="Login Image"
    style={{ width: '380px', height: '390px', objectFit: 'cover' }}
  />
</div>
       
        <div className="right">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-login">
              Login
            </button>
          </form>
          <div className="register-link">
            <p>Don't have an account? <span onClick={handleRegisterClick}>Register</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
