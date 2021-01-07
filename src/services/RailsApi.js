const BASE_URL = 'https://brewery-advisor-api.herokuapp.com/'

export function fetchProjectData(){
    return fetch(BASE_URL + 'locations')
    .then(res=>res.json())
}