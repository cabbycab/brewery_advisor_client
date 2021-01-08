import React from "react";

function Card(props) {
  const brewery = props.brewery;
  const key = props.key;

  return (
    <div>
      <h1>{brewery.name}</h1>
      <p>{brewery.description}</p>
      <p>{brewery.address}</p>
      <a href={brewery.website} target="_blank">
        {brewery.website}
      </a>
    </div>
  );
}

export default Card;
