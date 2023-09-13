#!/usr/bin/node
const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the URL for the GET request: ', function(url) {
  rl.close();
  
  request.get(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(`code: ${response.statusCode}`);
    } else {
      console.error('Error:', error);
    }
  });
});
