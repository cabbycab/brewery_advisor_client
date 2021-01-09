import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeContent from "./components/HomeContent/HomeContent";
import SelectionPage from "./pages/SelectionPage/SelectionPage";

// Hooks
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Functions, Components and Pages
import { fetchProjectData } from "./services/RailsApi";
import { handleDelete } from "./services/RailsApi";
import NewBreweryPage from "./pages/NewBreweryPage/NewBreweryPage";

function NotFound() {
  return (
    <div>
      <h1>404 not found</h1>
    </div>
  );
}

function App() {
  const [locationData, setLocationData] = useState([
    {
      city: "",
      state: "",
      breweries: [],
    },
  ]);

  async function getData() {
    const data = await fetchProjectData();
    setLocationData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  async function deleteBrewery() {
    await handleDelete()
      .then(() => {
        getData();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <Header />
      <h3>Check out local breweries in the following cities:</h3>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <div id="home-content">
              {locationData.map((locations, idx) => (
                <HomeContent key={idx} id={idx} locations={locations} />
              ))}
            </div>
          )}
        />
        <Route
          exact
          path="/breweries/:id"
          render={(props) => (
            <SelectionPage
              locationData={locationData[props.match.params.id].breweries}
              deleteBrewery={handleDelete}
              // deleteBrewery={deletedBrewery}
            />
          )}
        />

        <Route
          exact
          path="/newbrewery"
          render={(props) => (
            <NewBreweryPage
            // locationData={locationData[props.match.params.id].breweries}
            // id={locationData}
            // setLocationData={setLocationData}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
