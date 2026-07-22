// ── DOM Elements ─────────────────────────────────────────
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const completedBtn = document.getElementById("completedBtn");

// ── State ─────────────────────────────────────────────────
let tasks = [];       // array of task objects
let currentFilter = "all";   // "all" | "active" | "completed"

// ── Filter Button Events ──────────────────────────────────
allBtn.addEventListener("click", () => {
    currentFilter = "all";
    renderTasks();
});

activeBtn.addEventListener("click", () => {
    currentFilter = "active";
    renderTasks();
});

completedBtn.addEventListener("click", () => {
    currentFilter = "completed";
    renderTasks();
});

// ── Add Task Events ───────────────────────────────────────
addBtn.addEventListener("click", addTask);

// Also add task when Enter key is pressed
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addTask();
});


// Add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(), // unique id based on timestamp
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = "";
    renderTasks();
}

// Remove a task by its id
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
}

// Edit a task's text using a prompt dialog
function editTask(id) {
    const task = tasks.find((task) => task.id === id);
    const updatedText = prompt("Edit Task", task.text);

    // User cancelled the prompt
    if (updatedText === null) return;

    const trimmed = updatedText.trim();
    if (trimmed === "") {
        alert("Task cannot be empty.");
        return;
    }

    task.text = trimmed;
    renderTasks();
}

// Toggle a task's completed status
function toggleTask(id) {
    tasks = tasks.map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
    });
    renderTasks();
}

// Highlight the active filter button
function updateFilterButtons() {
    const active = "px-4 py-2 rounded-md bg-blue-600 text-white";
    const idle = "px-4 py-2 rounded-md bg-slate-200";

    allBtn.className = currentFilter === "all" ? active : idle;
    activeBtn.className = currentFilter === "active" ? active : idle;
    completedBtn.className = currentFilter === "completed" ? active : idle;
}

// Render tasks based on the current filter
function renderTasks() {
    taskList.innerHTML = "";

    // Keep only tasks that match the current filter
    const filtered = tasks.filter((task) => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true; // "all"
    });
    if (filtered.length === 0) {
        taskList.innerHTML = `
        <div class="text-center text-slate-500 py-6">
            No todos found.
        </div>
    `;

        updateFilterButtons();
        return;
    }
    // Build and append a card for each task
    filtered.forEach((task) => {
        const card = document.createElement("div");
        card.className = "flex items-center justify-between bg-slate-100 rounded-lg p-3";

        card.innerHTML = `
            <div class="flex items-center gap-3">

                <!-- Checkbox to toggle completed state -->
                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})"
                    class="w-5 h-5 cursor-pointer"
                >

                <!-- Task text; strikethrough when completed -->
                <span class="${task.completed ? "line-through text-slate-400" : "text-slate-800"}">
                    ${task.text}
                </span>

            </div>

            <div class="flex gap-2">

                <!-- Edit button -->
                <button
                    onclick="editTask(${task.id})"
                    class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                    Edit
                </button>

                <!-- Delete button -->
                <button
                    onclick="deleteTask(${task.id})"
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(card);
    });

    updateFilterButtons();
}

renderTasks();