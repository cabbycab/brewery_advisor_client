const BASE_URL = 'https://brewery-advisor-api.herokuapp.com/'

export function fetchProjectData(){
    return fetch(BASE_URL)
    .then(res=>res.json())
}