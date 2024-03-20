
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate =useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirmPassword') setConfirmPassword(value);
  };
  

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0 && username !== '') {
      // Form submission logic here
      console.log('Form submitted successfully');
      navigate("/services");
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <div className='back'>
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="input-box">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          />
          <i className='bx bxs-user'></i>
        </div>
        {errors.username && <p className="error-message">{errors.username}</p>}
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <i className='bx bxs-envelope'></i>
        </div>
        {errors.email && <p className="error-message">{errors.email}</p>}
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <i className='bx bxs-lock-alt'></i>
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}
        <div className="input-box">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <i className='bx bxs-lock-alt'></i>
        </div>
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            Remember me
          </label>
        </div>
        <button type="submit" className="btn">Signup</button>
        <div className="register-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;
