import React, { useState } from 'react';
import './EventForm.css';
import { details } from './Event'

const HostLoginForm = ({ correctPassword }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
  e.preventDefault();

  if (password === correctPassword) {
    // Password is correct, navigate to the host view of the page.
    // You might want to add the navigation logic here.
  } else {
    alert('Incorrect password. Please try again.');
  }
};


  return (
    <form onSubmit={handleLogin}>
      <h1 className='form-title'>{details.eventName} - Host View</h1>
      <p className='form-subtitle'>{details.eventDescription}</p>
      {/* Password Input */}
      <div className='form-field'>
        <label htmlFor='password'>Enter your host password:</label>
        <input
          name='password'
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit">View Event as Host</button>
    </form>
  );
};

export default HostLoginForm;
