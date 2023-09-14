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
    
    body = body.trim();
    
    fs.writeFile(file_path, body, 'utf-8', function(error) {
      if (error) {
        console.error(error);
      }
      else {
        // Read the saved file and print its content
        fs.readFile(file_path, 'utf-8', function(readError, data) {
          if (readError) {
            console.error(readError);
          }
          else {
            console.log(data);
          }
        });
      }
    });
  }
});
