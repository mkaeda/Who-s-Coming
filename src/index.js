import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HostLoginPage from './Pages/HostLoginPage';
import EventDetailsForm from './Components/EventDetailsForm/EventDetailsForm';
import CreateEventPage from './Pages/CreateEventPage'
import EventCreatedPage from './Pages/EventCreatedPage'
import EventHostPage from './Pages/EventHostPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <EventCreatedPage eventDetails={{
            name: 'Family Chirstmas Party',
            description: 'Bring your empty stomachs and ugly sweaters to enjoy the feastive Christmas season with the whole family!',
            location: 'Grandma\'s House',
            date: '2023-12-25',
            time: '18:00',
            minAttendees: 0,
            rsvpDeadline: '2023-12-20 23:59',
            url: 'https://some/random/url',
            hostPswd: 'password',
        }}/> */}
        <EventHostPage eventDetails={{
            name: 'Family Christmas Party',
            description: 'Bring your empty stomachs and ugly sweaters to enjoy the feastive Christmas season with the whole family!',
            location: 'Grandma\'s House',
            date: '2023-12-25',
            time: '18:00',
            minAttendees: 0,
            rsvpDeadline: '2023-12-20 23:59',
            url: 'https://some/random/url',
            hostPswd: 'password',
        }}
        rsvps={[
            {name: 'Makeda', attending: true},
            {name: 'Auntie', attending: false},
            {name: 'Uncle', attending: true},
        ]}/>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
