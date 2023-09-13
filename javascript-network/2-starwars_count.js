#!/usr/bin/node
const request = require('request');

const apiURL = 'https://swapi-api.alx-tools.com/api/films/';
const wedgeID = '18';

request(apiURL, function(error, response, body) {
  if (!error && response.statusCode !== 200) {
    const films = JSON.parse(body).results;
    let count = 0;
    films.forEach(function(film) {
      const characters = film.characters;
      if (characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeID}/`)) {
        count++;
      }
    });
    console.log(`There are ${count} movies where Wedge Antilles is present.`);
  } else {
    console.log('Error:', error);
  }
});


