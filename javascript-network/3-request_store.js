#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const file_path = process.argv[3];

request.get({ url, encoding: null }, function(error, response, body) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    // Decode the binary body content as UTF-8
    const decodedContent = body.toString('utf-8');
    
    fs.writeFile(file_path, decodedContent, 'utf-8', function(error) {
      if (error) {
        console.error(error);
      } else {
        // Read the saved file and print its content
        fs.readFile(file_path, 'utf-8', function(error, data) {
          if (error) {
            console.error(error);
          } else {
            console.log(data);
          }
        });
      }
    });
  } else {
    console.error(`Request to ${url} failed with status code: ${response.statusCode}`);
  }
});



