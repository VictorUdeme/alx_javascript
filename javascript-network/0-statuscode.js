#!/usr/bin/node
const request = require('request');
const url ='';

request.get(url, function(error, response, body) {
    if (response.statusCode===200) {
        console.log(`code: ${response.statusCode}`);
    } else {
        console.error('Error: ', error);
    }
})