import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/authSlice.js';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert('All fields are required');
      return;
    }
    dispatch(register(form));
    alert('Registered successfully!');
    navigate('/login');
  };

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
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
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="form-label d-block mb-2">Full Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label d-block mb-2">Email Address</label>
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
            <label className="form-label d-block mb-2">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-light w-100 fw-bold mb-3">
            Sign Up
          </button>

          <div className="text-center">
            <small>
              Already have an account?{' '}
              <span
                onClick={() => navigate('/login')}
                style={{ textDecoration: 'underline', cursor: 'pointer', color: '#fff' }}
              >
                Login
              </span>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
