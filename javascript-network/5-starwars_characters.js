const request = require('request');

function getMovieCharacters(movieId) {
  const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error(`Error fetching movie data: ${error}`);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Error: ${response.statusCode} - ${response.statusMessage}`);
      return;
    }

    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    // Print each character name
    characters.forEach(async (characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error(`Error fetching character data: ${charError}`);
          return;
        }

        if (charResponse.statusCode !== 200) {
          console.error(`Error: ${charResponse.statusCode} - ${charResponse.statusMessage}`);
          return;
        }

        const characterData = JSON.parse(charBody);
        console.log(characterData.name);
      });
    });
  });
}

const movieId = process.argv[2]; // Get the movie ID from the command line argument
if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}

getMovieCharacters(movieId);
