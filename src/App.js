import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeContent from "./components/HomeContent/HomeContent";

// Hooks
import {useState, useEffect} from 'react'


// Functions, Components and Pages
import {fetchProjectData} from './services/RailsApi'



function App() {
  return (
    <div className="App">
      <Header />
      <p>Check out local breweries in the following cities.</p>
      <Footer />
    </div>
  );
}

export default App;
