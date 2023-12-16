import React from 'react';
import EventForm from './components/EventForm.js';
import EventDetails from './components/EventDetails.js';
import './App.css'; // Assuming you have an App.css for your styles

function App() {
    return (
        <div className="App">
            {/* <EventForm/> */}
            <EventDetails/>
        </div>
    );
}

export default App;
