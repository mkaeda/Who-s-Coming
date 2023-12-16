import React, { useState } from 'react';
import './EventForm.css'; 


function Form() {
    const [formData, setFormData] = useState({
        eventName: '',
        description: '',
        location: '',
        date: '',
        time: '',
        participationThreshold: '',
        rsvpDeadline: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Create Event</h1>
            <p className="form-subtitle">
                Design your perfect gathering by effortlessly setting up crucial details like date, time, and venue.
            </p>
            <form onSubmit={handleSubmit} className="event-form">
                <div className="form-field">
                    <label htmlFor="eventName">Event Name</label>
                    <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="description">Description (Optional)</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date" // changed to type="date" for a date picker
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="time">Time</label>
                    <input
                        type="time" // changed to type="time" for a time picker
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="participationThreshold">Minimum Attendees Needed for Event</label>
                    <input
                        type="number" // changed to type="number" to ensure numerical input
                        id="participationThreshold"
                        name="participationThreshold"
                        value={formData.participationThreshold}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="rsvpDeadline">RSVP Deadline</label>
                    <input
                        type="date" // assuming this is a date, changed to type="date"
                        id="rsvpDeadline"
                        name="rsvpDeadline"
                        value={formData.rsvpDeadline}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <button type="submit" className="submit-button">CREATE EVENT</button>
                </div>
            </form>
        </div>
    );
}


export default Form;
