const addBtn = document.getElementById("addBtn");
const input = document.getElementById("task");
const list = document.getElementById("list");

// Add Task
addBtn.addEventListener("click", () => {
    const task = input.value.trim();

    if (task === "") return;
    const taskRegex=/^[A-Za-z0-9 ]+$/
    if (!taskRegex.test(task)){
        alert("Enter Correct Task")
        input.value=""
        return 
    }

    const li = document.createElement("li");
    li.className = "flex items-center justify-between bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 shadow-sm";

    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.className = "text-gray-800 font-medium flex-1";

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "flex gap-2";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition";

    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(buttonGroup);

    list.appendChild(li);

    input.value = "";
});

// Delete/Edit  Task (Event Delegation)
list.addEventListener("click", (event) => {

    //Delete 
    if (event.target.classList.contains("delete")) {
        const isConfirmed = confirm("Are you sure?")
        if (isConfirmed) {
            event.target.parentElement.parentElement.remove();
        }
    }
    //Edit 
    if (event.target.classList.contains("edit")) {
        const li = event.target.parentElement.parentElement
        const taskText = li.querySelector("span")
        const updatedTask = prompt("Edit Task : ", taskText.textContent)

        if (updatedTask != null && updatedTask.trim() !== "") {
            taskText.textContent = updatedTask.trim()
        }
    }
});