let progressTasks = JSON.parse(localStorage.getItem("progressTasks")) || [];
let doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];

let tableBody = document.querySelector("table tbody");


function renderTasks() {
  tableBody.innerHTML = "";
  progressTasks.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.startdate}</td> <!-- Ensure 'startDate' and 'endDate' are used consistently -->
            <td>${task.enddate}</td>
            <td>${task.priority}</td>
            <td>
                <button data-index="${index}" class="add-to-done">Add to done</button>
            </td>
        `;
    tableBody.appendChild(row);
  });
}


tableBody.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-done")) {
    let taskIndex = event.target.getAttribute("data-index");
    let selectedTask = progressTasks[taskIndex];


    progressTasks.splice(taskIndex, 1);


    doneTasks.push(selectedTask);


    localStorage.setItem("progressTasks", JSON.stringify(progressTasks));
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));


    renderTasks();
  }
});


renderTasks();
