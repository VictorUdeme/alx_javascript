#!/usr/bin/node
const request = require('request');

const wedgeAntillesId = 18;
const starWarsApiUrl = 'https://swapi-api.alx-tools.com/api/films/';

// Make a GET request to the Star Wars API
request.get(starWarsApiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  // Parse the JSON response
  const films = JSON.parse(body);

  // Count the number of films where Wedge Antilles is present
  let wedgeAntillesMoviesCount = 0;
  for (const film of films) {
    if (film.characters.includes(wedgeAntillesId)) {
      wedgeAntillesMoviesCount++;
    }
  }

  // Print the result
  console.log(`Wedge Antilles is present in ${wedgeAntillesMoviesCount} films.`);
});
