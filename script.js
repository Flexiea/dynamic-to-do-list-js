document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            tasks.push(li.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask(taskText = taskInput.value.trim(), save = true) {
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.classList.add('task-item');
        li.textContent = taskText;

        // Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Event listener for removing task
        removeButton.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        // Append to list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save task
        if (save) saveTasks();

        // Clear input
        taskInput.value = '';
    }

    // Event listener for Add button
    addButton.addEventListener('click', () => addTask());

    // Load tasks from storage on page load
    loadTasks();
});
