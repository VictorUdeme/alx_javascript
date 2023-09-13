#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

function fetchFilms(url, count = 0) {
    request({ url: url, json: true }, (error, response, body) => {
        if (error) {
            console.log(error);
            return;
        }

        body.results.forEach(film => {
            if (film.characters.includes(`http://swapi.dev/api/people/${characterId}/`)) {
                count++;
            }
        });

        if (body.next) {
            fetchFilms(body.next, count);
        } else {
            console.log(count);
        }
    });
}

fetchFilms(apiUrl);



