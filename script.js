function addTask() {
    const taskText = document.getElementById("todo-input").value.trim();

    if (!taskText) {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("todo-list");

    // Create the list item for the task
    const listItem = document.createElement("li");

    // Create a span to hold the task text
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    listItem.appendChild(taskContent);

    // Create the edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => {
        // Make the task text editable
        taskContent.contentEditable = true;
        taskContent.focus();
        editButton.textContent = "Save"; // Change button text to "Save"
        
        // Change the button's action to save the edited text
        editButton.onclick = () => {
            taskContent.contentEditable = false; // Make text non-editable
            editButton.textContent = "Edit"; // Revert button text to "Edit"
        };
    };

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => taskList.removeChild(listItem);

    // Append the buttons to the list item
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Append the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field and focus on it
    const inputField = document.getElementById("todo-input");
    inputField.value = "";
    inputField.focus();  // Focus the input field for a smooth experience

    // Optional: Automatically save edited task when pressing Enter
    taskContent.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && taskContent.contentEditable === "true") {
            taskContent.contentEditable = false;
            editButton.textContent = "Edit";
        }
    });
}
