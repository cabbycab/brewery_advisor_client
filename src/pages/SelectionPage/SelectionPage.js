import React from "react";
import Card from "../../components/Card/Card";

function SelectionPage(props) {
  return (
    <main>
      <div>
        <div>
          {props.locationData.map((brewery, idx) => (
            <Card brewery={brewery} key={idx} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default SelectionPage;
