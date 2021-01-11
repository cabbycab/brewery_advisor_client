import React from "react";
import Card from "../../components/Card/Card";
import "./SelectionPage.css";

function SelectionPage(props) {
  return (
    <main>
      <div className="Card__container">
        <div className="Card__holder">
          {props.locationData.map((brewery, idx) => (
            <Card
              brewery={brewery}
              key={brewery.id}
              deleteBrewery={props.deleteBrewery}
              updateBrewery={props.updateBrewery}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default SelectionPage;
