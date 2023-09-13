#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request({ url: apiUrl, json: true }, (error, response, body) => {
    if (error) {
        console.log(error);
        return;
    }
    let count = 0;
    body.results.forEach(film => {
        if(film.characters.includes(`http://swapi.dev/api/people/${characterId}/`)) {
            count++;
        }
    });
    console.log(count);
});


