import React from "react";
import "./Card.css";

function Card(props) {
  const brewery = props.brewery;
  const key = props.key;

  return (
    <div className="Card__base" key={key}>
      <h1>{brewery.name}</h1>
      <p>{brewery.description}</p>
      <p>{brewery.address}</p>
      <a href={brewery.website} target="_blank" rel="noreferrer noopener">
        {brewery.website}
      </a>
    </div>
  );
}

export default Card;
