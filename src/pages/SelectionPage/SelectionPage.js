import React from "react";

function SelectionPage(props) {
  return (
    <main>
      <div>
        <div>
          {props.locationData.map((brewery, idx) => (
            <div>
              <h1>{brewery.name}</h1>
              <p>{brewery.description}</p>
              <p>{brewery.address}</p>
              <a href={brewery.website} target="_blank">
                {brewery.website}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default SelectionPage;
