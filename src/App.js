import './App.css';

// Hooks
import {useState, useEffect} from 'react'


// Functions, Components and Pages
import {fetchProjectData} from './services/RailsApi'



function App() {
  return (
    <div className="App">
      <h1>BreweryAdvisor</h1>
      <p>Check out local breweries in the following cities.</p>
    </div>
  );
}

export default App;
