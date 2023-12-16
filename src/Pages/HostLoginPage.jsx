import React from 'react';
import HostLoginForm from '../Components/HostLoginForm/HostLoginForm'
import './Page.css'

const HostLoginPage = ({ eventDetails }) => {
  return (
    <>
        <h1>{eventDetails.eventName} - Host View</h1>
        <p>{eventDetails.eventDescription}</p>

        <HostLoginForm correctPassword={eventDetails.hostPswd}/>

    </>
  );
};

export default HostLoginPage;
