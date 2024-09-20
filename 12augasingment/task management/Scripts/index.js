let form = document.querySelector("#create form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let taskname = document.getElementById("name");
  let taskdescription = document.getElementById("desc");
  let taskpriority = document.getElementById("priority");
  let taskstartdate = document.getElementById("start");
  let taskenddate = document.getElementById("end");

  let task = {
    name: taskname.value,
    description: taskdescription.value,
    priority: taskpriority.value,
    startdate: taskstartdate.value,
    enddate: taskenddate.value,
  };

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task created successfully");

  form.reset();
});
