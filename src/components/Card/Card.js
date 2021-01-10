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
  const key = props.key;

  return (
    <>
      {editFormVisible ? (
        <>
          <div className="Card__base">
            <EditForm brewery={brewery} />
            <button onClick={toggleForm}>Cancel</button>
          </div>
        </>
      ) : (
        <div className="Card__base" key={key}>
          <h1>{brewery.name}</h1>
          <p>{brewery.description}</p>
          <p>{brewery.address}</p>
          <a href={brewery.website} target="_blank" rel="noreferrer noopener">
            {brewery.website}
          </a>
          <button onClick={() => props.deleteBrewery(brewery)}>X</button>
          <button onClick={toggleForm}>Edit</button>
        </div>
      )}
    </>
  );
}

export default Card;
