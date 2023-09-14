#!/usr/bin/node

const request = require('request');

// Ensure a movie ID is provided as a command-line argument
const movieId = process.argv[2];

if (!movieId) {
  console.error("Please provide a movie ID as a command-line argument (e.g., 3 for 'Return of the Jedi').");
  process.exit(1);
}

// Define the Star Wars API base URL
const apiUrl = 'https://swapi.dev/api';

// Function to fetch and print characters for a given movie
function printCharactersForMovie(movieId) {
  const movieUrl = `${apiUrl}/films/${movieId}/`;

  request.get(movieUrl, function (error, response, body) {
    if (error) {
      console.error("Error:", error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error("HTTP Status Code:", response.statusCode);
      return;
    }

    try {
      const movieData = JSON.parse(body);
      console.log(`Characters in ${movieData.title}:`);
      movieData.characters.forEach((characterUrl) => {
        request.get(characterUrl, function (charError, charResponse, charBody) {
          if (charError) {
            console.error("Error fetching character:", charError);
            return;
          }

          if (charResponse.statusCode !== 200) {
            console.error("HTTP Status Code:", charResponse.statusCode);
            return;
          }

          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        });
      });
    } catch (err) {
      console.error("Error parsing JSON:", err);
    }
  });
}

// Call the function to fetch and print characters for the specified movie
printCharactersForMovie(movieId);
