import React, { useState } from 'react';
import '../Form.css';

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
      {/* Password Input */}
      <label>Enter your host password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      {/* Submit Button */}
      <button type="submit">View Event as Host</button>
    </form>
  );
};

export default HostLoginForm;
