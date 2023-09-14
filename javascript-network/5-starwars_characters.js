#!/usr/bin/node

function printMovieCharacters(movieId) {
    const url = `https://swapi.dev/api/films/${movieId}/`;
  
    request(url, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
      } else {
        const movie = JSON.parse(body);
        console.log(`Characters of ${movie.title}:`);
        movie.characters.forEach((characterUrl) => {
          request(characterUrl, (error, response, body) => {
            if (error) {
              console.error('Error:', error);
            } else {
              const character = JSON.parse(body);
              console.log(character.name);
            }
          });
        });
      }
    });
  }


