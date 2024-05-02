import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; // Import CSS for styling

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulating OTP sending
    setTimeout(() => {
      setOtpSent(true);
    }, 1000);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Simulating OTP verification
    if (otp === '123456') {
      // OTP verified, proceed with user registration
      navigate('/dashboard');
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <div className="left">
        <img
    src="/img.01.jpg"
    alt="Login Image"
    style={{ width: '380px', height: '390px', objectFit: 'cover' }}
  />
        </div>
        <div className="right">
          {!otpSent ? (
            <div>
              <h2>Register</h2>
              <form onSubmit={handleRegister}>
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
                <div className="form-group">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    className="input-field"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-register">
                  Register
                </button>
              </form>
              <div className="login-link">
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </div>
          ) : (
            <div>
              <h2>Enter OTP</h2>
              <form onSubmit={handleVerifyOtp}>
                <div className="form-group">
                  <label>OTP:</label>
                  <input
                    type="text"
                    className="input-field"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-otp">
                  Verify OTP
                </button>
              </form>
            </div>
          )}
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Register;
