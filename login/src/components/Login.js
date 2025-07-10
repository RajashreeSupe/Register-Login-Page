import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const existingUser = users.find(
      (user) => user.email === form.email && user.password === form.password
    );

    if (existingUser) {
      dispatch(login(existingUser));
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: '#f0f2f5', // Light grey background instead of blue
         
      }}
    >
      <div
        style={{
          width: '420px',
          padding: '2rem',
          borderRadius: '1rem',
          background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
          color: 'white',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="form-label mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="example@mail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label mb-2">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-light w-100 fw-semibold mb-3">
           Login
           </button>


          <div className="text-center">
            <small>
              Don’t have an account?{' '}
              <span
                onClick={() => navigate('/register')}
                style={{ cursor: 'pointer', textDecoration: 'underline', color: '#fff' }}
              >
                Register
              </span>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
