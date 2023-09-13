const request = require('request');

const apiUrl = process.argv[2];

const getMoviesWithWedge = () => {
  const response = request.get(apiUrl);
  const films = JSON.parse(response.body);

  let count = 0;
  for (const film of films) {
    for (const character of film.characters) {
      if (character.id === 18) {
        count++;
        break;
      }
    }
  }

  return count;
};

const main = () => {
  const count = getMoviesWithWedge();
  console.log(`Wedge Antilles is in ${count} movies.`);
};

main();
