document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let tbody = document.querySelector("tbody");

  // Load data from local storage on page load
  loadTableData();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let experience = document.getElementById("experience").value;
    let email = document.getElementById("email").value;
    let id = document.getElementById("id").value;
    let priority = document.getElementById("priority").value;

    let rowData = {
      name,
      phone,
      experience,
      email,
      id,
      priority,
      role: determineRole(experience),
    };

    addRowToTable(rowData);
    saveRowToLocalStorage(rowData);
    form.reset();
  });

  function addRowToTable(rowData) {
    let tr = document.createElement("tr");

    Object.values(rowData).forEach((value) => {
      let td = document.createElement("td");
      td.innerText = value;
      tr.appendChild(td);
    });

    let tdDelete = document.createElement("td");
    tdDelete.addEventListener("click", function () {
      this.parentElement.remove();
      removeRowFromLocalStorage(rowData.id);
    });
    tdDelete.innerText = "Delete";
    tdDelete.style.backgroundColor = "red";
    tdDelete.style.color = "white";
    tdDelete.style.cursor = "pointer";

    tr.appendChild(tdDelete);
    tbody.appendChild(tr);
  }

  function saveRowToLocalStorage(rowData) {
    let rows = JSON.parse(localStorage.getItem("tableRows")) || [];
    rows.push(rowData);
    localStorage.setItem("tableRows", JSON.stringify(rows));
  }

  function loadTableData() {
    let rows = JSON.parse(localStorage.getItem("tableRows")) || [];
    rows.forEach(addRowToTable);
  }

  function removeRowFromLocalStorage(id) {
    let rows = JSON.parse(localStorage.getItem("tableRows")) || [];
    rows = rows.filter((row) => row.id !== id);
    localStorage.setItem("tableRows", JSON.stringify(rows));
  }

  function determineRole(experience) {
    if (experience <= 1) {
      return "Trainee";
    } else if (experience > 5) {
      return "Senior";
    } else {
      return "Junior";
    }
  }
});
