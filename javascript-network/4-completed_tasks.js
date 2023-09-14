#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, function(error, response, body){
    if (error) {
        console.error("Error:", error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error("HTTP Status Code:", response.statusCode);
        return;
    }

    try {
        const users = JSON.parse(body);
        const taskCompleted = {}; // Changed the variable name to follow JavaScript naming conventions

        users.forEach((user) => { // Corrected the typo 'foreach' to 'forEach'
            if (user.completed) {
                if (taskCompleted[user.userId]) { // Check if the property exists in the object
                    taskCompleted[user.userId]++;
                } else {
                    taskCompleted[user.userId] = 1;
                }
            }
        });

        console.log(taskCompleted);
    } catch (err) {
        console.error("Error parsing JSON:", err);
    }
});
