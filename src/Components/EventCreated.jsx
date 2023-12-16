import React from 'react';
import CopyableTextLine from './CopyableTextLine/CopyableTextLine'
import './EventForm'
import { details } from './Event'


const EventCreated = () => {
  return (
    <div>
        <h1 className='form-title'>Event Created!</h1>
        <p className='form-subtitle'>Thank you for creating the event {details.eventName}! Share the generated RSVP link with your friends!</p>

        <CopyableTextLine text={details.url}/>

        <p>Make sure to note down your host password so you can keep track of Who's Coming!</p>

        <CopyableTextLine text={details.hostPswd}/>
    </div>
  );
};

export default EventCreated;
