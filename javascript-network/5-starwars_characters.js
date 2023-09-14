#!/usr/bin/node

const request = require('request');

// Get the movie ID from the user
const movieId = process.argv[2];

// Make a GET request to the Star Wars API to retrieve the movie data
request(`https://swapi.dev/api/films/${movieId}`, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    // Parse the JSON response
    const movie = JSON.parse(body);

    // Get the characters from the movie
    const characters = movie.characters;

    if (characters.length === 0) {
      console.log("No characters found");
    } else {
      // Iterate over the characters and print their names
      for (const character of characters) {
        request(character, function (error, response, body) {
          if (error) {
            console.error(error);
          } else {
            const characterData = JSON.parse(body);
            console.log(characterData.name);
          }
        });
      }
      console.log("OK");
    }
  }
});

