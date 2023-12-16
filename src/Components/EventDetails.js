import React from 'react';
import './EventDetails.css'; // Make sure to create this CSS file to style your component

function EventDetails() {
  // Placeholder state data
  const details = {
    eventName: "Tania's Birthday Party!",
    eventDescription: 'A birthday bash for our dear friend Tania!',
    eventLink: 'https://some/random/url',
    date: 'December 13 2023',
    time: '6:00 PM',
    location: 'UNA Pizza',
    participationThreshold: '5 People',
    rsvpDeadline: 'December 12, 2023',
    rsvpYes: ['Makeda', 'Junior'],
    rsvpNo: ['Alex']
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(details.eventLink)
      .then(() => alert('Link copied to clipboard!'))
      .catch(err => console.error('Error copying link: ', err));
  };

  return (
    <div className="event-details-container">
      <h1>{details.eventName}</h1>
      <p>{details.eventDescription}</p>
      <div>
        <button onClick={handleCopyLink}>Copy Event Invite Link</button>
      </div>
      {/* Display the rest of your event details here */}
      <div className="event-info">
        <strong>Date:</strong> {details.date}<br/>
        <strong>Time:</strong> {details.time}<br/>
        <strong>Location:</strong> {details.location}<br/>
        <strong>Participation Threshold:</strong> {details.participationThreshold}<br/>
        <strong>RSVP Deadline:</strong> {details.rsvpDeadline}
      </div>
      <div className="rsvp-breakdown">
        <div className="rsvp-list rsvp-yes">
            <h3>Yes, I can attend.</h3>
            <ul>
              {details.rsvpYes.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
        </div>
        <div className="rsvp-list rsvp-no">
          <h3>No, I cannot attend.</h3>
          <ul>
            {details.rsvpNo.map((name, index) => <li key={index}>{name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
