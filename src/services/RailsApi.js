const BASE_URL = "https://brewery-advisor-api.herokuapp.com/";
// const BASE_URL = "http://localhost:3000/";

export function fetchProjectData() {
  return fetch(BASE_URL + "locations").then((res) => res.json());
}

export function handleAddData(brewery) {
  return fetch(BASE_URL + "breweries", {
    body: JSON.stringify(brewery),
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
