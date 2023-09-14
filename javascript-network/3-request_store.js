#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const file_path = process.argv[3];

request(url, function(error, response, body) {
  if (error) {
    console.error(error);
  }
  else {
    // Remove leading and trailing whitespace, including newline characters
    body = body.trim();
    
    fs.writeFile(file_path, body, 'utf-8', function(error) {
      if (error) {
        console.error(error);
      }
      else {
        console.log(file_path);
      }
    });
  }
});

