import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeContent from "./components/HomeContent/HomeContent";

// Hooks
import {useState, useEffect} from 'react'


// Functions, Components and Pages
import {fetchProjectData} from './services/RailsApi'



function App() {

  const [locationData, setLocationData] = useState([{
    city: '',
    state: '',
    breweries: []
  }])

  async function getData(){
    const data = await fetchProjectData()
    setLocationData(data)
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <div className="App">
      <Header />
      <p>Check out local breweries in the following cities.</p>
      <Footer />
    </div>
  );
}

export default App;
