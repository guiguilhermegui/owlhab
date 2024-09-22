const taskApi = new TaskAPI(0);

// Get free time value
console.log(taskApi.freeTimeValue); // Output: Number

// Get task complete status
console.log(taskApi.isChecked); // Output: true/false

// Get task text
console.log(taskApi.taskText); // Output: "My Task Title"
