#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}

request.get(`https://swapi.dev/api/films/${movieId}/`, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error('Error fetching movie data.');
    process.exit(1);
  }

  const movieData = JSON.parse(body);

  movieData.characters.forEach((characterUrl) => {
    request.get(characterUrl, (charError, charResponse, charBody) => {
      if (!charError && charResponse.statusCode === 200) {
        const characterData = JSON.parse(charBody);
        console.log(characterData.name);
      }
    });
  });
});
