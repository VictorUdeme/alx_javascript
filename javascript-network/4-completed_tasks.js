const request = require("request");

// Define the API URL
const url = "https://jsonplaceholder.typicode.com/todos";

// Make a GET request to the API
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  // Parse the JSON response into a list of tasks
  const tasks = JSON.parse(body);

  // Create an object to store the number of completed tasks for each user
  const completedTasksByUser = {};

  // Loop through each task
  tasks.forEach(function (task) {
    // Check if the task is completed
    if (task.completed) {
      // Get the user ID for the task
      const userId = task.userId;
      // Increment the number of completed tasks for the user
      if (!completedTasksByUser[userId]) {
        completedTasksByUser[userId] = 1;
      } else {
        completedTasksByUser[userId]++;
      }
    }
  });

  // Print the number of completed tasks for users 1 and 2
  console.log(completedTasksByUser);
});
