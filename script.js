// Select elements
const form = document.getElementById('todo-form');
const input = document.getElementById('input');
const itemsList = document.getElementById('items');

// Function to create a new to-do item
function createTodoItem(taskText) {
    // Create a unique ID for the checkbox
    const id = `todo-${Date.now()}`;

    // Create the list item
    const li = document.createElement('li');
    li.className = 'todo';

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;

    // Create the custom checkbox label
    const checkboxLabel = document.createElement('label');
    checkboxLabel.className = 'custom-checkbox';
    checkboxLabel.htmlFor = id;
    checkboxLabel.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600">
            <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
    `;

    // Create the task text label
    const taskLabel = document.createElement('label');
    taskLabel.className = 'todo-text';
    taskLabel.textContent = taskText;

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
        </svg>
    `;

    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => {
        li.remove(); // Remove the task when the delete button is clicked
    });

    // Add event listener to the checkbox
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskLabel.style.textDecoration = 'line-through'; // Strike through the task when checked
            taskLabel.style.color = '#888'; // Change text color when checked
        } else {
            taskLabel.style.textDecoration = 'none'; // Remove strike-through when unchecked
            taskLabel.style.color = '#333'; // Reset text color
        }
    });

    // Append all elements to the list item
    li.appendChild(checkbox);
    li.appendChild(checkboxLabel);
    li.appendChild(taskLabel);
    li.appendChild(deleteButton);

    return li;
}

// Function to handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const taskText = input.value.trim(); // Get the task text

    if (taskText !== '') {
        const newTodoItem = createTodoItem(taskText); // Create a new to-do item
        itemsList.appendChild(newTodoItem); // Add it to the list
        input.value = ''; // Clear the input field
    } else {
        alert('Please enter a task!'); // Show an alert if the input is empty
    }
});