#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request.get(url, function(error, response, body){
    if (error) {
        console.error("Error:", error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error("Status code:", response.statusCode);
        return;
    }

    try {
        const films = JSON.parse(body);
        const characters = films.results.flatMap(film => film.characters);

        const count = characters.filter(characterUrl => characterUrl.endsWith('/18/')).length;
        console.log(count);
    } catch (parseError) {
        console.error("JSON parse error:", parseError);
    }
});

