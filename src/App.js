import React from 'react';
import EventForm from './Components/EventForm.js';
import EventDetails from './Components/EventDetails.js';
import RSVPForm from './Components/RSVPForm.jsx';
import Homepage from './Components/HostLoginForm.jsx';
import EventCreated from './Components/EventCreated.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* {<Homepage/>} */}
            {/* {<EventForm/>} */}
            {/* {<EventDetails/>} */}
            {<RSVPForm/>}
        </div>
    );
}

export default App;
