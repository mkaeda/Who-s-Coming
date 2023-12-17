// HOME SCREEN
import React, { useState } from 'react';
// import './EventForm.css';
import './HostLoginForm.css';
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

const handleCreateEvent = () => {
  // Logic for handling the "Create New Event" button click
};

  return (
    <>
      <div>
        <p className='home-subtitle'>Welcome to</p>
        <h1 className='home-title'> Who's Coming</h1>
        <button className='home-create' onClick={handleCreateEvent}>Create New Event</button>
      </div>

      <form onSubmit={handleLogin}>
        <p className='already-have'>Already have an event?</p>

        {/* Password Input */}
        <div className='form-field'>
          <input
            name='password'
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your host password"
          />
        </div>

        {/* Submit Button */}
        <button className='home-edit' type="submit">View Event as Host</button>
      </form>
    </>
  );
};


export default HostLoginForm;
