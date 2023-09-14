#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const file_path = process.argv[3];

request.get(url, { encoding: 'utf-8' }, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(file_path, body, { encoding: 'utf-8' }, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log(body);
      }
    });
  }
});
