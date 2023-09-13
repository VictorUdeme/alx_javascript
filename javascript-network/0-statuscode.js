#!/usr/bin/node
const request = require('request');

request.get('http://example.com/nonexistent', function (error, response, body) {
    if (error) {
        console.log('Error: ', error);
        return;
    }
    console.log('code:', response.statusCode);
});

