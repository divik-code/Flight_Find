import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Booking from './components/Booking';
import Plan from './components/Plan';
import BasicButtonExample from './components/Dropdown';
import Memories from './components/Memories';

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            {<Booking />}
            <div>

            <BasicButtonExample/>
            </div>
            <Plan/>
            <Memories/>
        </div>
    );
}

export default App;
