#!/usr/bin/node
const request = require('request');

// Function to count the number of movies with a specific character
function countMoviesWithCharacter(apiUrl, characterId) {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Invalid response:', response.statusCode);
    } else {
      const filmData = JSON.parse(body);
      const moviesWithCharacter = filmData.results.filter((film) =>
        film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
      );
      console.log( 'characterId, moviesWithCharacter.length');
    }
  });
}

// Usage: Provide the API URL and character ID as command line arguments
const apiUrl = process.argv[2];
const characterId = 18;

if (!apiUrl) {
  console.error('Please provide the API URL as an argument.');
} else {
  countMoviesWithCharacter(apiUrl, characterId);
}
