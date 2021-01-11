// Functions, Components and Pages
import { fetchProjectData } from "./services/RailsApi";
import NewBreweryPage from "./pages/NewBreweryPage/NewBreweryPage";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeContent from "./components/HomeContent/HomeContent";
import SelectionPage from "./pages/SelectionPage/SelectionPage";

// Hooks
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <div>
        <h1>404 not found</h1>
      </div>
    </main>
  );
}

function App() {
  const BASE_URL = "https://brewery-advisor-api.herokuapp.com/";
  // const BASE_URL = "http://localhost:3000/";

  const [locationData, setLocationData] = useState([
    {
      city: "",
      state: "",
      breweries: [],
    },
  ]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetchProjectData();
    setLocationData(data);
  }

  function handleDelete(deletedBrewery) {
    return fetch(BASE_URL + `breweries/${deletedBrewery.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        // re-using this function to update the state again
        getData();
      })
      .catch((error) => console.log(error));
  }

  function handleUpdate(event, brewery) {
    //   event.preventdefault();
    return fetch(BASE_URL + `breweries/${brewery.id}`, {
      body: JSON.stringify(brewery),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        // re-using this function to update the state again
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
              updateBrewery={handleUpdate}
            />
          )}
        />

        <Route
          exact
          path="/newbrewery"
          render={(props) => <NewBreweryPage />}
        />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
