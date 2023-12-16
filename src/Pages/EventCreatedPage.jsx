import React from 'react';
import EventDetailsForm from '../Components/EventDetailsForm/EventDetailsForm';
import CopyableTextLine from '../Components/CopyableTextLine/CopyableTextLine'
import './Page.css'

const EventCreatedPage = ({ eventDetails }) => {
  return (
    <div>
        <h1>Event Created!</h1>
        <p>Thank you for creating the event {eventDetails.eventName}! Share the generated RSVP link with your friends!</p>

        <CopyableTextLine text={eventDetails.url}/>

        <p>Make sure to note down your host password so you can keep track of Who's Coming!</p>

        <CopyableTextLine text={eventDetails.hostPswd}/>

        <hr className='horizontal-line'/>

        <h2>Event Details</h2>

        <EventDetailsForm formData={{ event: eventDetails, canEdit: false }} />

        <button>Done</button>

    </div>
  );
};

export default EventCreatedPage;
