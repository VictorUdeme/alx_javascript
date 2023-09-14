#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

// Making an HTTP GET request to the specified URL
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error('Received non-200 status code:', response.statusCode);
        return;
    }

    // Writing the response body to the specified file with UTF-8 encoding
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
        if (writeError) {
            console.error('Error writing to file:', writeError);
        } else {
            console.log(`Saved response to ${filePath}`);
        }
    });
});
