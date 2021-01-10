import { useState } from "react";
import { handleAddData } from "../../services/RailsApi";

const NewBreweryPage = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    address: "",
    website: "",
    location_id: 0,
  });

  function handleChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    // e.preventDefault();
    console.log(formState);
    try {
      await handleAddData(formState);
    } catch (e) {
      console.log(handleAddData);
    }
  }

  return (
    <main>
      <div>
        {/* <div>
          Hi There, this is the form for adding breweries to the clicked cities
          list.
          {props.locationData.map((brewery, idx) => (
            <h1 key={idx}>{brewery.name}</h1>
          ))}
        </div> */}
        <h3>Location id's:</h3>
        <h3>Austin: 1</h3>
        <h3>NYC: 2</h3>
        <h3>San Diego: 3</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add a new Brewery</legend>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              placeholder="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              placeholder="address"
              name="address"
              value={formState.address}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              placeholder="website"
              name="website"
              value={formState.website}
              onChange={handleChange}
            ></input>
            <input
              type="number"
              min="1"
              max="3"
              placeholder="location id"
              value={formState.location_id}
              name="location_id"
              onChange={handleChange}
            ></input>
            {/* value/location=props.id something like that here */}
            <button>Add Brewery</button>
          </fieldset>
        </form>
      </div>
    </main>
  );
};

export default NewBreweryPage;
