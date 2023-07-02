// Containers
let mainContainer = document.getElementById("container");
let todoContainer = document.getElementById("todo-container");
let completeContainer = document.getElementById("complete-container");
let addTaskForm = document.querySelector(".add-form");
let editTaskWindow = document.querySelector("#edit-form");
let editTaskForm = document.querySelector(".edit-form");
let addTaskContainer = document.querySelector("#add-form");

let tasksList;

let stylesList = {
  taskCard: {
    container: ["card", "text-center"],
    header: ["card-header"],
    body: ["card-body"],
    taskName: ["card-title"],
    taskInfo: ["card-text"],
    buttons: {
      "btn-container": [
        "d-grid",
        "gap-2",
        "d-md-flex",
        "justify-content-md-end",
      ],
      "complete-task-btn": ["btn", "btn-success", "me-md-2"],
      "edit-task-btn": ["btn", "btn-warning", "me-md-2"],
      "delete-task-btn": ["btn", "btn-danger", "me-md-2"],
    },
  },
};

function fillTasks() {
  const exampleData = [
    {
      id: 208,
      title: "Send an important email to a client",
      deadline: "10-8-2023",
      description:
        "Draft and send an email to the client outlining the progress of their project and answering any questions they may have.",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 23,
      title: "Schedule a dentist appointment",
      deadline: "5-10-2023",
      description:
        "Contact the dentist's office, check their availability, and schedule a convenient appointment for a dental check-up or cleaning.",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 299,
      title: "Buy groceries for the week",
      deadline: "6-29-2023",
      description:
        "Make a list of essential items, go to the grocery store, and purchase everything needed for meals and snacks for the week.",
      priority: "Low",
      status: "In Progress",
    },
    {
      id: 2243,
      title: "Attend a meeting or appointment",
      deadline: "5-4-2023",
      description:
        "Ensure that you have the necessary information and materials for the meeting or appointment, such as an agenda or relevant documents. Arrive on time or log in to the virtual meeting platform at least a few minutes early.",
      priority: "Extreme",
      status: "Completed",
    },
  ];
  tasksList = JSON.parse(localStorage.getItem("tasks")) || exampleData;
}

function attachHandlersOnLoad() {
  // Support the test
  document.querySelector(".purifier").addEventListener("click", () => {
    localStorage.clear();
    fillTasks();
    reloadTasks();
  });
  // Support the test

  document.querySelectorAll(".task .remove").forEach((el) => {
    el.addEventListener("click", deleteTask);
  });
  document.querySelectorAll(".task .edit").forEach((el) => {
    el.addEventListener("click", fillEditForm);
  });
  document.querySelectorAll(".task .done").forEach((el) => {
    el.addEventListener("click", completeTask);
  });
  document.querySelector(".add-form button").addEventListener("click", addTask);

  document
    .querySelector(".edit-form button")
    .addEventListener("click", modifyTask);

  document
    .querySelector("body > div.sort-navbar > button")
    .addEventListener("click", () => {
      let criteria = document.querySelector("#sort-select").value;
      sortBy(criteria);
    });
  document
    .querySelector("body > button.display-add-form")
    .addEventListener("click", () => {
      const date = formatDate(new Date());
      document.querySelector(".add-form #deadline").value = date;
      showAddTaskForm();
    });
}

function onWindowLoad() {
  fillTasks();
  attachHandlersOnLoad();
  reloadTasks();
}

onWindowLoad();

function renderTasks(list) {
  list.forEach((task) => taskRenderer(task));
}

function taskRenderer(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add([...stylesList.taskCard.container]);
  taskDiv.dataset.id = String(task.id);

  const taskHeader = document.createElement("div");
  taskHeader.innerHTML = "<hr>";
  taskHeader.classList.add([...stylesList.taskCard.header]);

  const taskBody = document.createElement("div");
  taskBody.classList.add([...stylesList.taskCard.body]);

  const taskTitle = document.createElement("h5");
  taskTitle.textContent = task.title;
  taskTitle.classList.add([...stylesList.taskCard.taskName]);

  const taskPriority = document.createElement("h6");
  taskPriority.textContent = "Priority: " + task.priority;
  taskPriority.classList.add([...stylesList.taskCard.taskInfo]);

  const taskStatus = document.createElement("h6");
  taskStatus.textContent = "Status: " + task.status;
  taskStatus.classList.add([...stylesList.taskCard.taskInfo]);

  const taskDeadline = document.createElement("h6");
  taskDeadline.textContent = "Deadline: " + task.deadline;
  taskDeadline.classList.add([...stylesList.taskCard.taskInfo]);

  const taskDetailsDetails = document.createElement("details");
  const taskDetailsSummary = document.createElement("summary");
  taskDetailsSummary.innerHTML = "Description";
  const taskDetailsContent = document.createElement("p");
  taskDetailsContent.innerHTML = `${task.description}`;
  taskDetailsDetails.appendChild(taskDetailsSummary);
  taskDetailsDetails.appendChild(taskDetailsContent);

  taskBody.appendChild(taskTitle);
  taskBody.appendChild(taskPriority);
  taskBody.appendChild(taskStatus);
  taskBody.appendChild(taskDeadline);
  taskBody.appendChild(taskDetailsDetails);

  if (task.status !== "Completed") {
    const btnGroup = document.createElement("div");
    btnGroup.classList.add(...stylesList.taskCard.buttons["btn-container"]);

    const doneButton = document.createElement("button");
    doneButton.dataset.id = task.id;
    doneButton.classList.add(
      ...stylesList.taskCard.buttons["complete-task-btn"]
    );
    doneButton.textContent = "Done";
    doneButton.addEventListener("click", completeTask);

    const editButton = document.createElement("button");
    editButton.dataset.id = task.id;
    editButton.classList.add(...stylesList.taskCard.buttons["edit-task-btn"]);
    editButton.textContent = "Edit";
    editButton.addEventListener("click", fillEditForm);

    const dltBtn = document.createElement("button");
    dltBtn.dataset.id = task.id;
    dltBtn.classList.add(...stylesList.taskCard.buttons["delete-task-btn"]);
    dltBtn.textContent = "Delete";
    dltBtn.addEventListener("click", deleteTask);

    btnGroup.appendChild(doneButton);
    btnGroup.appendChild(editButton);
    btnGroup.appendChild(dltBtn);

    taskBody.appendChild(btnGroup);
  } else if (task.status === "Completed") {
    const displayMessage = document.createElement("p");
    displayMessage.textContent = "Done !";
    taskBody.appendChild(displayMessage);
  }
  if (task.status !== "Completed") {
    document
      .querySelector("#todo-container #task-container")
      .appendChild(taskDiv);
  } else if (task.status == "Completed") {
    document
      .querySelector("#complete-container #task-container")
      .appendChild(taskDiv);
  }
  taskDiv.appendChild(taskHeader);
  taskDiv.appendChild(taskBody);
}
function reloadTasks(reloadTarget = "both", listToLoad) {
  function loadElements(list, container, secondContainer = null) {
    while (container.firstChild) {
      container.firstChild.remove();
    }
    if (secondContainer !== null) {
      while (secondContainer.firstChild) {
        secondContainer.firstChild.remove();
      }
    }
    renderTasks(list);
  }
  let toDoTasksDiv = document.querySelector("#todo-container #task-container");
  let completeTasksDiv = document.querySelector(
    "#complete-container #task-container"
  );
  switch (reloadTarget) {
    case "both":
      loadElements(tasksList, toDoTasksDiv, completeTasksDiv);
      break;
    case "to-do":
      loadElements(tasksList, toDoTasksDiv);
      break;
    case "completed":
      loadElements(tasksList, completeTasksDiv);
      break;
    case "sorted":
      loadElements(listToLoad, toDoTasksDiv);
      break;
  }
}

function addTask(e) {
  e.preventDefault();

  const taskData = new FormData(addTaskForm);

  let id = Math.floor(Math.random() * 10000);
  let title = taskData.get("title");
  let description = taskData.get("description");
  let priority = taskData.get("priority");
  let status = taskData.get("status");
  let deadline = taskData.get("deadline");
  let today = Date.now();
  if (new Date(deadline).getTime() >= today) {
    let currTask = { id, title, deadline, description, priority, status };
    tasksList.push(currTask);

    localStorage.setItem("tasks", JSON.stringify(tasksList));
    taskRenderer(currTask);
    hideAddTaskForm();
  } else {
    alert("You cannot set deadlines for today or the past.");
  }
}

function hideAddTaskForm() {
  addTaskContainer.style.display = "none";
}

function showAddTaskForm() {
  addTaskContainer.style.display = "flex";
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate() + 1;
  let formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  return formattedDate;
}
function deleteTask(e) {
  let id = +e.target.dataset.id;
  console.log(id);
  let idList = tasksList.map((task) => task.id);
  let idIndex = idList.indexOf(id);
  tasksList.splice(idIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksList));

  reloadTasks();
}

function completeTask(e) {
  let id = +e.target.dataset.id;
  tasksList.forEach((task) => {
    if (id == task.id) {
      task.status = "Completed";
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasksList));
  reloadTasks();
}

function modifyTask(e) {
  e.preventDefault();
  const taskData = new FormData(editTaskForm);
  let id = +document.querySelector("#edit-id").value;
  let title = taskData.get("title");
  let deadline = taskData.get("deadline");
  let status = taskData.get("status");
  let today = Date.now();
  if (new Date(deadline).getTime() >= today) {
    let description = taskData.get("description");
    let priority = taskData.get("priority");
    tasksList.forEach((task) => {
      if (task.id == id) {
        task.id = id;
        task.title = title;
        task.deadline = deadline;
        task.description = description;
        task.priority = priority;
        task.status = status;
      }
    });

    reloadTasks();
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    hideEditForm();
  } else {
    alert("You cannot set deadlines for today or the past.");
  }
}

function loadEditForm(e) {
  let taskId = +e.target.dataset.id;
  let matchTask = findTaskById(taskId);
  document.querySelector("#edit-id").value = taskId;
  document.querySelector("#edit-title").value = matchTask.title;
  document.querySelector("#task-description").value = matchTask.description;
  const date = formatDate(new Date(matchTask.deadline));
  document.querySelector(".edit-form #edit-deadline").value = date;
  document.querySelector(".edit-form #edit-priority").value =
    matchTask.priority;
  document.querySelector(".edit-form #edit-status").value = matchTask.status;
}

function fillEditForm(e) {
  loadEditForm(e);
  displayEditForm();
}

function findTaskById(id) {
  return tasksList.find(function (task) {
    return task.id === id;
  });
}

function displayEditForm() {
  editTaskWindow.style.display = "block";
}
function hideEditForm() {
  editTaskWindow.style.display = "none";
}

function sortBy(criteria) {
  switch (criteria) {
    case "priority-desc":
      sortByPriority("desc");
      break;
    case "priority-asc":
      sortByPriority("asc");
      break;
    case "deadline":
      sortByDeadline();
      break;
    case "description":
      sortByDescription();
      break;
  }
}
function sortByPriority(signal) {
  let priorityRank = {
    Extreme: 1,
    High: 2,
    Medium: 3,
    Low: 4,
  };
  let cloneTasksList = tasksList.filter((task) => {
    if (task.status == "In Progress") {
      return task;
    }
  });
  if (signal == "desc") {
    cloneTasksList.sort((a, b) => {
      return priorityRank[a.priority] < priorityRank[b.priority] ? -1 : 1;
    });
  } else if (signal == "asc") {
    cloneTasksList.sort((a, b) => {
      return priorityRank[a.priority] > priorityRank[b.priority] ? -1 : 1;
    });
  }
  reloadTasks("sorted", cloneTasksList);
}
function sortByDeadline() {
  let cloneTasksList = tasksList.filter((task) => {
    if (task.status == "In Progress") {
      return task;
    }
  });
  let now = Date.now();
  cloneTasksList.sort((a, b) => {
    const dateA = now - new Date(a.deadline.split("-").join(","));
    const dateB = now - new Date(b.deadline.split("-").join(","));
    return dateB - dateA;
  });
  reloadTasks("sorted", cloneTasksList);
}

// Description Sort
function sortByDescription() {
  const keyWords = document.querySelector("#keyWords").value.split(" ");
  let matchedTasks = [];
  if (keyWords != "") {
    tasksList.forEach((currTask) => {
      if (currTask.status !== "Completed") {
        for (word in keyWords) {
          if (
            currTask.description
              .toLowerCase()
              .includes(keyWords[word].toLowerCase())
          ) {
            !matchedTasks.includes(currTask)
              ? matchedTasks.unshift(currTask)
              : "";
          } else if (currTask.status == "In Progress") {
            if (!matchedTasks.map((task) => task.id).includes(currTask.id)) {
              matchedTasks.push(currTask);
            }
          }
        }
      }
    });
    reloadTasks("sorted", matchedTasks);
  } else {
    alert("Write criteria words");
  }
}

function detectDescriptionSort() {
  if (document.querySelector("#sort-select").value == "description") {
    document.querySelector("#key-words").style.display = "inline-block";
  } else {
    document.querySelector("#key-words").style.display = "none";
  }
}
