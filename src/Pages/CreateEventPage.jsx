import React from 'react';
import EventDetailsForm from '../Components/EventDetailsForm/EventDetailsForm';
import './Page.css'

const CreateEventPage = () => {
  return (
    <div>
      <h1>Create Event</h1>
      <p className='page-description'>Organise the perfect get-together with the crew and see who's coming.</p>

      {/* Form Component */}
      <EventDetailsForm />
    </div>
  );
};

export default CreateEventPage;
