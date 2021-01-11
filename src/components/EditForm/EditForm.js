import { useState, useEffect } from "react";
import "./EditForm.css";

const EditForm = (props) => {
  const [editformState, setEditFormState] = useState({
    name: "",
    description: "",
    address: "",
    website: "",
    location_id: 0,
  });

  useEffect(() => {
    if (props.brewery) {
      setEditFormState({
        name: props.brewery.name,
        description: props.brewery.description,
        address: props.brewery.address,
        website: props.brewery.website,
        location_id: props.brewery.location_id,
        id: props.brewery.id,
      });
    }
  }, [props.brewery]);

  function handleChange(event) {
    setEditFormState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  function handleUpdateBrewery(event) {
    if (props.brewery) editformState.id = props.brewery.id;
    props.handleSubmit(event, editformState);
  }

  return (
    <div>
      <form onSubmit={handleUpdateBrewery}>
        <legend>Edit the following</legend>
        <input
          onChange={handleChange}
          name="name"
          placeholder={editformState.name}
          type="text"
          value={editformState.name}
          id="name"
        />
        <textarea
          className="description-box"
          onChange={handleChange}
          name="description"
          placeholder={editformState.description}
          type="text"
          value={editformState.description}
          id="description"
        />
        <textarea
          className="address-site"
          onChange={handleChange}
          name="address"
          placeholder={editformState.address}
          type="text"
          value={editformState.address}
          id="address"
        />
        <textarea
          className="address-site"
          onChange={handleChange}
          name="website"
          placeholder={editformState.wesbite}
          type="text"
          value={editformState.website}
          id="website"
        />
        <input
          onChange={handleChange}
          name="location_id"
          placeholder={editformState.location_id}
          type="text"
          value={editformState.location_id}
          id="location_id"
        />
        <input
          type="submit"
          className="update-btn"
          value={props.brewery ? "Update Brewery" : "nothing to update"}
        />
      </form>
    </div>
  );
};

export default EditForm;
