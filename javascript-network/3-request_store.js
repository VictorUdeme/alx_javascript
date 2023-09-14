#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const [url, outputFilePath] = process.argv.slice(2);

if (!url || !outputFilePath) {
    console.error('Usage: node fetch_and_store.js <URL> <output_file>');
    process.exit(1);
}

request(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    fs.writeFile(outputFilePath, body, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            process.exit(1);
        }
        console.log(`Webpage content has been saved to ${outputFilePath}`);
    });
});
