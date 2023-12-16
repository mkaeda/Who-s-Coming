import React from 'react';
import CopyableTextLine from '../Components/CopyableTextLine/CopyableTextLine'
import EventDetailsForm from '../Components/EventDetailsForm/EventDetailsForm';
import './Page.css'

const EventHostPage = ({ eventDetails , rsvps}) => {
  // The rsvps will have the form [{ name: string, attending: boolean }]
  return (
    <>
        <h1>{eventDetails.name}</h1>
        <p>{eventDetails.description}</p>

        <hr className='horizontal-line'/>

        <EventDetailsForm formData={{ event: eventDetails, canEdit: false }} />

        <br/>

        <hr className='horizontal-line'/>

        <h2>RSVP Breakdown</h2>

        <div className='grid-box'>
          <div className='attending'>
            <p className='bold'>Yes, I can attend.</p>
            {rsvps.filter((rsvp) => rsvp.attending).map((rsvp) =>
                <p>{rsvp.name}</p>
            )}
          </div>
          <div className='skipping'>
            <p className='bold'>No, I cannot attend.</p>
            {rsvps.filter((rsvp) => !rsvp.attending).map((rsvp) =>
                <p>{rsvp.name}</p>
            )}
          </div>
        </div>

        <hr className='horizontal-line'/>

        <p>Make sure to share the link with anybody who might want to show up!</p>

        <CopyableTextLine text={eventDetails.url}/>
    </>
  );
};

export default EventHostPage;
