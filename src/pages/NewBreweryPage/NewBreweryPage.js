import { useState } from "react";
import { handleAddData } from "../../services/RailsApi";

const NewBreweryPage = (props) => {
  const [formState, setFormState] = useState([
    {
      name: "",
      description: "",
      address: "",
      website: "",
      location_id: "",
    },
  ]);

  function handleChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    try {
      await handleAddData(formState);
    } catch (e) {
      console.log(handleAddData);
    }
  }

  return (
    <div>
      <div>
        Hi There, this is the form for adding breweries to the clicked cities
        list.
        {props.locationData.map((brewery) => (
          <h1>{brewery.name}</h1>
        ))}
      </div>

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
            type="text"
            placeholder="location id"
            value={formState.location_id}
            name="location_id"
          ></input>
          {/* value/location=props.id something like that here */}
        </fieldset>
      </form>
    </div>
  );
};

export default NewBreweryPage;
