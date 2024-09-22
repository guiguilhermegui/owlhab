const taskApi = new TaskAPI(0); // Task number that already exists

// Set task text
taskApi.taskText = 'This is the My Text Title';



// Set free time value
taskApi.freeTimeValue = 7;

// Set task complete status
taskApi.isChecked = false; 

// Add a subtask
taskApi.addSubtaskItem('Subtask 1');



// Remove a subtask
taskApi.removeSubtaskItem(0);
