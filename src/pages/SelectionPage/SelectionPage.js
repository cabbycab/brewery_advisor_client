import React from "react";

function SelectionPage(props) {
  return (
    <main>
    <div>
     <div>
        {props.locationData.map((brewery, idx)=><h1>{brewery.name}</h1>)}
    </div>
    </div>
    </main>
  );
}
 
export default SelectionPage;
