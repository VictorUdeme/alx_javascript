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

  // Create a map to store the number of completed tasks for each user
  const completedTasksByUser = new Map();

  // Loop through each task
  tasks.forEach(function (task) {
    // Check if the task is completed
    if (task.completed) {
      // Get the user ID for the task
      const userId = task.userId;
      // Increment the number of completed tasks for the user
      completedTasksByUser.set(userId, (completedTasksByUser.get(userId) || 0) + 1);
    }
  });

  // Filter the results to include only users 1 and 2
  const filteredResults = new Map();
  completedTasksByUser.forEach(function (numCompletedTasks, userId) {
    if (userId === 1 || userId === 2) {
      filteredResults.set(userId, numCompletedTasks);
    }
  });

  // Print the number of completed tasks for users 1 and 2
  filteredResults.forEach(function (numCompletedTasks, userId) {
    console.log(`User ${userId} completed ${numCompletedTasks} task(s).`);
  });
});
