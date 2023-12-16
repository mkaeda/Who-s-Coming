import React, { useState } from 'react';
import '../Form.css';
import {faEdit} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EventDetailsForm = ({ formData: initialFormData = {
        event: {
            name: '',
            description: '',
            location: '',
            date: '',
            time: '',
            minAttendees: 0,
            rsvpDeadline: '',
            url: '',
            hostPswd: '',
        },
        canEdit: true,
    }}) => {

    // State to manage form inputs
    const [formData, setFormData] = useState(initialFormData);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setFormData((prevState) => ({
            ...prevState, // Spread the entire formData object
            event: {
                ...prevState.event, // Spread the existing event properties
                [name]: value,
            },
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions with form data (e.g., send to server, update state, etc.)
        // Create random url and assign to eventDetails.url
        // Create random host password and assign to eventDetails.hostPswd
        console.log('Form submitted:', formData);
    };

    // Function to toggle the "review" attribute
    const toggleEditable = () => {
        setFormData((prevState) => ({
            ...prevState,
            canEdit: !prevState.canEdit,
        }));
    };

    return (
    <form onSubmit={handleSubmit}>

        {!formData.canEdit && (
            <>
                <a className='anchor' onClick={toggleEditable}>Edit<FontAwesomeIcon icon={faEdit}/></a>
                <br/>
            </>
        )}

        {/* Event Name */}
        <label>Event Name</label>
        <input
            type="text"
            name="name"
            value={formData.event.name}
            onChange={handleInputChange}
            required
            disabled={!formData.canEdit}
        />

        {/* Event Description */}
        <label>Description (Optional)</label>
        <textarea
            name="description"
            value={formData.event.description}
            onChange={handleInputChange}
            disabled={!formData.canEdit}
        />

        {/* Event Location */}
        <label>Location</label>
        <input
            type="text"
            name="location"
            value={formData.event.location}
            onChange={handleInputChange}
            required
            disabled={!formData.canEdit}
        />

        {/* Event Date */}
        <label>Date</label>
        <input
            type="date"
            name="date"
            value={formData.event.date}
            onChange={handleInputChange}
            required
            disabled={!formData.canEdit}
        />

        {/* Event Time */}
        <label>Time</label>
        <input
            type="time"
            name="time"
            value={formData.event.time}
            onChange={handleInputChange}
            required
            disabled={!formData.canEdit}
        />


        {/* Minimum Attendees */}
        <label>Minimum Attendees</label>
        <input
            type="number"
            name="minAttendees"
            value={formData.event.minAttendees}
            onChange={handleInputChange}
            required
            disabled={!formData.canEdit}
        />

        {/* RSVP Deadline */}
        <label>RSVP Deadline</label>
        <input
            type="datetime-local"
            name="rsvpDeadline"
            value={formData.event.rsvpDeadline}
            onChange={handleInputChange}
            disabled={!formData.canEdit}
        />

        {/* Submit Button (conditionally rendered) */}
        {formData.canEdit && (
            <button type="submit">Submit</button>
        )}
    </form>
    );
};

export default EventDetailsForm;
