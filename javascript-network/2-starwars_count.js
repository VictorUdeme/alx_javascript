#!/usr/bin/node
const request = require('request');

// Function to fetch all films
function fetchAllFilms(apiUrl) {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Invalid response:', response.statusCode);
    } else {
      const filmData = JSON.parse(body);
      const allFilms = filmData.results;
      countMoviesWithCharacter(allFilms, characterId);
    }
  });
}

// Function to count the number of movies with a specific character
function countMoviesWithCharacter(films, characterId) {
  const moviesWithCharacter = films.filter((film) =>
    film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
  );

  console.log(`Number of movies with Wedge Antilles (Character ID ${characterId}): ${moviesWithCharacter.length}`);
}

// Usage: Provide the API URL of all films and character ID as command line arguments
const apiUrl = process.argv[2];
const characterId = 18;

if (!apiUrl) {
  console.error('Please provide the API URL of all films as an argument.');
} else {
  fetchAllFilms(apiUrl);
}

