#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, function(error, response, body){
    const users = JSON.parse(body);
    const task_completed = {};
    users.foreach((user) => {
        if (user.completed){
            task_completed[user.userId];
            task_completed[user.userId]++;

        } else {
            task_completed[user.userId] = 1;
        }
    });
    console.log(task_completed);
});