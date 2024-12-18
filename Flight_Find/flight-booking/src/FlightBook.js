import React, { useState } from 'react';
import airlineLogo from './assets/airline-logo.jpg';
import './App.css';

function FlightBook() {
    const [flightDetails, setFlightDetails] = useState({
        source: '',
        destination: '',
        time: ''
    });

    const handleChange = (e) => {
        setFlightDetails({ ...flightDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(flightDetails); 
    };

    return (
        <div className="flightBooking">
            <img src={airlineLogo} alt="Airline Logo" />
        <form onSubmit={handleSubmit}>
            <div>
                <label>Source:</label>
                <input 
                    type="text" 
                    name="source" 
                    value={flightDetails.source} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Destination:</label>
                <input 
                    type="text" 
                    name="destination" 
                    value={flightDetails.destination} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Time:</label>
                <input 
                    type="time" 
                    name="time" 
                    value={flightDetails.time} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit">Book Flight</button>
        </form>
        </div>
    );

    
} 


export default FlightBook;
