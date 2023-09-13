#!/usr/bin/node
const request = require('request');

request.get('https://intranet.alxswe.com', function (error, response, body) {
    if (error) {
        console.log('Error: ', error);
        return;
    }
    console.log('code:', response.statusCode);
});
