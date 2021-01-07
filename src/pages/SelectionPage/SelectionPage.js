import React from "react";

function SelectionPage(props) {
  return (
    <div>
     <div>
      {/* <h1>Breweries in {(props[0].city, props[0].state)}</h1> */}
        <h1>{props.locationData.name}</h1>
    </div>
    </div>
  );
}
 
export default SelectionPage;
