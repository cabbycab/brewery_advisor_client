import React from "react";
import { useState } from "react";
import "./Card.css";
import EditForm from "../EditForm/EditForm";

// TODO set up form state for the editform and pass that state as props to the editform and bring in the update function (similar to the newBreweryPage form)

function Card(props) {
  const [editFormVisible, setEditFormVisible] = useState(false);

  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }

  const brewery = props.brewery;
  // const key = props.key;

  function handleTheUpdate(event, brewery) {
    props.updateBrewery(event, brewery);
    toggleForm();
  }

  return (
    <>
      {editFormVisible ? (
        <>
          <div className="Card__base">
            <EditForm
              brewery={props.brewery}
              // updateBrewery={props.updateBrewery}
              // updateBrewery={handleTheUpdate}
              handleSubmit={handleTheUpdate}
            />
            <div>
              <button onClick={toggleForm}>Cancel</button>
            </div>
          </div>
        </>
      ) : (
        <div className="Card__base">
          <h1>{brewery.name}</h1>
          <p>{brewery.description}</p>
          <p>{brewery.address}</p>
          <a href={brewery.website} target="_blank" rel="noreferrer noopener">
            {brewery.website}
          </a>{" "}
          <br />
          <div id="container">
            <button onClick={() => props.deleteBrewery(brewery)}>Delete</button>
            <button onClick={toggleForm}>Edit</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
