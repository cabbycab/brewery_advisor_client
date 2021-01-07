import React from "react";

function SelectionPage(props) {
  return (
    <div>
     <div>
        {props.locationData.map((brewery, idx)=><h1>{brewery.name}</h1>)}
    </div>
    </div>
  );
}
 
export default SelectionPage;
