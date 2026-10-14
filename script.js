// 1. Get the elements from the page
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// 2. Make a function to add a task
function addTask() {
  const text = taskInput.value.trim();

  // Do nothing if the box is empty
  if (text === "") {
    return;
  }

  // Make a new list item
  const li = document.createElement("li");
  li.textContent = text;

  // Put it in the list
  taskList.appendChild(li);

  // Clear the box
  taskInput.value = "";
}

// 3. Run the function when the button is clicked
addBtn.addEventListener("click", addTask);

// 4. Also run it when the user presses Enter
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});