import { useState } from "react";
import { handleAddData } from "../../services/RailsApi";
import "./NewBreweryPage.css";

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
    e.preventDefault();
    console.log(formState);
    try {
      await handleAddData(formState).then(() => props.getData());
    } catch (e) {
      console.log(handleAddData);
    }
  }

  return (
    <main>
      <div>
        <h3>Location ID's:</h3>
        <p>
          Austin: 1 <br />
          New York City: 2 <br />
          San Diego: 3
        </p>
        <div id="form-div">
          <form onSubmit={handleSubmit} className="new_form">
            <legend className="legend">Add a New Brewery</legend>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            ></input>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={formState.description}
              onChange={handleChange}
              required
            ></input>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formState.address}
              onChange={handleChange}
              required
            ></input>
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={formState.website}
              onChange={handleChange}
              required
            ></input>
            <input
              type="text"
              placeholder="Location ID"
              value={formState.location_id}
              name="location_id"
              onChange={handleChange}
              required
            ></input>
            <div id="add-btn">
              <button>Add Brewery</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default NewBreweryPage;
