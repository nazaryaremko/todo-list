import {all_projects} from './addProject.js';

function deleteTasks () {
    var currentTasks = document.querySelectorAll('.task')
    if (currentTasks.length > 0) {
        currentTasks.forEach(element => {
            element.remove()
        });
    }
}
function displayTasks (project) {
    var tasks = document.getElementById('tasks')
    var addtaskBtn = document.getElementById('add-ts')

    for (let i = 0; i < all_projects.length; i++) {
        if (all_projects[i].title == project.innerHTML) {
            var chosenProject = all_projects[i]
        }
    }

    deleteTasks();

    for (let i = 0; i<chosenProject.todolist.length; i++) {
        var newTask = document.createElement('input')
        newTask.setAttribute('type', 'checkbox')
        newTask.setAttribute('class', 'task')
        newTask.setAttribute('id', String(chosenProject.todolist[i].title))
        if (chosenProject.todolist[i].status == 'done') {
            newTask.checked = true;
        }
    
        var newlabel = document.createElement("Label");
        newlabel.setAttribute("for", String(chosenProject.todolist[i].title))
        newlabel.setAttribute("class", 'task')
        newlabel.innerHTML = String(chosenProject.todolist[i].title);

        tasks.insertBefore(newTask, addtaskBtn)
        tasks.insertBefore(newlabel, addtaskBtn)
    }
}

export default displayTasks;