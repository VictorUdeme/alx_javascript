#!/usr/bin/node
const request = require('request');
const url ='https://intranet.alxswe.com';

request.get(url, function(error, response, body) {
    if (response.statusCode===200) {
        console.log(`code: ${response.statusCode}`);
    } else {
        console.error('Error: ', error);
    }
})