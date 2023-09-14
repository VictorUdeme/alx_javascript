#!/usr/bin/node

const request = require('request');

const movieId = prompt("Enter the Movie ID: ");
const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    const characters = data.characters;
    characters.forEach(characterUrl => {
      request(characterUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
        }
      });
    });
  } else {
    console.log("Error fetching movie data.");
  }
});
