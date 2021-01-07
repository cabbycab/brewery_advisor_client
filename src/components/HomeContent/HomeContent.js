import {Link} from 'react-router-dom'


function HomeContent(props) {
    return (
      <div>

        <header>
         <h1>{props.locations.city}</h1>
         <Link to={`/breweries/${props.id}`}>See Breweries</Link>
        </header>

      </div>
    );
}

export default HomeContent;