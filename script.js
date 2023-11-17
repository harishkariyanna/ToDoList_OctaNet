function addTask() {
    let newTaskText = document.getElementById("newTask").value;
    if (newTaskText.trim() === "") return;

    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `<span>${newTaskText}</span><button class="delete" onclick="deleteTask(this)">Delete</button>`;
    ul.appendChild(li);

    document.getElementById("newTask").value = "";
    saveTasks();
}

function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
    saveTasks();
}

function saveTasks() {
    let taskList = [];
    let lis = document.querySelectorAll("#taskList li");
    lis.forEach(li => {
        let taskText = li.querySelector("span").textContent;
        taskList.push(taskText);
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function loadTasks() {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    let ul = document.getElementById("taskList");
    taskList.forEach(taskText => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span><button class="delete" onclick="deleteTask(this)">Delete</button>`;
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", loadTasks);
