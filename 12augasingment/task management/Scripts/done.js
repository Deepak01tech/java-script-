
let doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];


let tableBody = document.querySelector("table tbody");

function renderTasks() {
  tableBody.innerHTML = ""; 


  doneTasks.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.startdate}</td> <!-- Ensure 'startDate' and 'endDate' are used consistently -->
            <td>${task.enddate}</td>
            <td>${task.priority}</td>
            <td>
                <!-- No button needed since tasks are in 'done' state -->
            </td>
        `;
    tableBody.appendChild(row);
  });
}


renderTasks();
