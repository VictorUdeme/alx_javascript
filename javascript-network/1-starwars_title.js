#!usr/bin/node

const request = require('request');

// Function to get the title of a Star Wars movie by episode number
function getStarWarsMovieTitle(episodeNumber) {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${episodeNumber}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Invalid response:', response.statusCode);
    } else {
      const movieData = JSON.parse(body);
      console.log(movieData.title);
    }
  });
}

// Usage: Provide the episode number as a command line argument
const episodeNumber = process.argv[2];

if (!episodeNumber) {
  console.error('Please provide an episode number as an argument.');
} else {
  getStarWarsMovieTitle(episodeNumber);
}


