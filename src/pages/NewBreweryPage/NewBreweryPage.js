import { handleAddData } from '../../services/RailsApi'


const NewBreweryPage = (props)=>{
    return(
    <div>Hi There, this is the form for adding breweries to the following list {props.locationData.map((brewery)=><h1>{brewery.name}</h1>)}</div>
    )
}

export default NewBreweryPage