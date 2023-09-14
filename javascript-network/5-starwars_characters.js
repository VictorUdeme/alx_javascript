#!/usr/bin/node

const request = require('request-promise');

const movieId = process.argv[2];

if (!movieId) {
  console.error("Please provide a movie ID as a command-line argument (e.g., 3 for 'Return of the Jedi').");
  process.exit(1);
}

const apiUrl = 'https://swapi.dev/api';

async function printCharactersForMovie(movieId) {
  try {
    const movieData = await request.get(`${apiUrl}/films/${movieId}/`, { json: true });
    console.log(`Characters in ${movieData.title}:`);
    
    const charactersData = await Promise.all(movieData.characters.map(characterUrl => request.get(characterUrl, { json: true })));

    charactersData.forEach(characterData => {
      console.log(characterData.name);
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

printCharactersForMovie(movieId);
