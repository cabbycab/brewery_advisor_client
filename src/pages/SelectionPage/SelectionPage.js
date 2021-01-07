import React from "react";

function SelectionPage(props) {
  console.log(props);
  console.log(props.locationData[0].city);
  return (
    <div>{/* <h1>Breweries in {(props[0].city, props[0].state)}</h1> */}</div>
  );
}

export default SelectionPage;
