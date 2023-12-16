import React from 'react';
import CopyableTextLine from '../Components/CopyableTextLine/CopyableTextLine'
import RSVPForm from '../Components/RSVPForm/RSVPForm'
import './Page.css'

const EventRsvpPage = ({ eventDetails }) => {
  return (
    <>
        <h1>{eventDetails.eventName}</h1>
        <p>{eventDetails.eventDescription}</p>

        <div>
            <div className='grid-box'>

                {/* Event Date */}
                <p className='label'>Date</p>
                <p>{eventDetails.eventDate}</p>

                {/* Event Time */}
                <p className='label'>Time</p>
                <p>{eventDetails.eventTime}</p>

                {/* Event Location */}
                <p className='label'>Location</p>
                <p>{eventDetails.eventLocation}</p>

            </div>

            <a href='#' className='anchor'>View as Host</a>
        </div>

        <br/>

        <hr className='horizontal-line'/>

        <RSVPForm />

        <hr className='horizontal-line'/>

        <p>Make sure to share the link with anybody who might want to show up!</p>

        <CopyableTextLine text={eventDetails.url}/>
    </>
  );
};

export default EventRsvpPage;
