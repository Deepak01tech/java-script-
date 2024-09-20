let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let progressTasks = JSON.parse(localStorage.getItem("progressTasks")) || [];

let tableBody = document.querySelector("table tbody");
let taskcount = document.getElementById("task-count");
let filter = document.getElementById("filter");


function renderTasks(filteredTasks) {
  tableBody.innerHTML = "";
  filteredTasks.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.startdate}</td>
            <td>${task.enddate}</td>
            <td>${task.priority}</td>
            <td>
                <button data-index="${index}" class="add-to-progress">Add to progress</button>
            </td>
        `;
    tableBody.appendChild(row);
  });
  taskcount.textContent = filteredTasks.length;
}


function applyFilter() {
  let selectedPriority = filter.value;
  let filteredTasks;

  if (selectedPriority === "") {
    filteredTasks = tasks;
  } else {
    filteredTasks = tasks.filter((task) => task.priority === selectedPriority);
  }

  renderTasks(filteredTasks);
}


filter.addEventListener("change", applyFilter);


tableBody.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-progress")) {
    let taskIndex = event.target.getAttribute("data-index");
    let selectedTask = tasks[taskIndex];


    tasks.splice(taskIndex, 1);


    progressTasks.push(selectedTask);


    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("progressTasks", JSON.stringify(progressTasks));


    applyFilter();
  }
});


renderTasks(tasks);
