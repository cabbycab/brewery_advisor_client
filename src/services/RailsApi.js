const BASE_URL = ''

export function fetchProjectData(){
    return fetch(BASE_URL)
    .then(res=>res.json())
}