import {all_projects} from './addProject.js';
import deleteTask from './deleteTask.js';

function deleteAllTasks () {
    var currentTasks = document.querySelectorAll('.task')
    var currentLabels = document.querySelectorAll('.task_l')
    var currentDlt= document.querySelectorAll('.delete-task')
    if (currentTasks.length > 0) {
        currentTasks.forEach(element => {
            element.remove()
        });
        currentLabels.forEach(element => {
            element.remove()
        });
        currentDlt.forEach(element => {
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

    deleteAllTasks();

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
        newlabel.setAttribute("class", 'task_l')
        newlabel.innerHTML = String(chosenProject.todolist[i].title);

        var deleteBtnT = document.createElement('button')
        deleteBtnT.setAttribute('class', 'delete-task')
        deleteBtnT.innerText = 'Delete the task'

        deleteBtnT.addEventListener('click', function(e) {
            if (e.target) {
                deleteTask(e.target)
            }
        })

        var divider = document.createElement('div')
        divider.appendChild(newTask)
        divider.appendChild(newlabel)
        divider.appendChild(deleteBtnT)
        tasks.insertBefore(divider, addtaskBtn)
    }
}

export default displayTasks;