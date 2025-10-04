// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the value from the input field and trim extra spaces
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new list item (li) and a span for text
        const li = document.createElement('li');
        li.classList.add('task-item'); // example class for li (optional, useful for styling)

        const span = document.createElement('span');
        span.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // use classList.add instead of className

        // Add functionality to remove the task when clicked
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append text and remove button to the list item
        li.appendChild(span);
        li.appendChild(removeButton);

        // Add the list item to the unordered list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add event listener for "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing "Enter" key in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
