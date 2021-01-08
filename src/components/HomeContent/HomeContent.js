import { Link } from "react-router-dom";
import "./HomeContent.css";

function HomeContent(props) {
  return (
    <div id="city">
      <h1>{props.locations.city}</h1>
      <Link to={`/breweries/${props.id}`}>See Breweries</Link> <br />
      <br />
      <br />
    </div>
  );
}

export default HomeContent;
