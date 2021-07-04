import createTask from './createTask.js';
import deleteTask from './deleteTask.js';
import {all_projects} from './addProject.js';


function addTask () {
    var newTask = createTask(prompt('Name'), '', '', 'not done')
    var tasks = document.getElementById('tasks')
    var addtaskBtn = document.getElementById('add-ts')

    var deleteBtnT = document.createElement('button')
    deleteBtnT.setAttribute('class', 'delete-task')
    deleteBtnT.innerText = 'Delete the task'

    var container = document.getElementById('projects')
    var currentButton = container.getElementsByClassName('project active')
    
    for (var i = 0; i < all_projects.length; i++) {
        if (currentButton.item(0).parentNode.id == all_projects[i].title) {
            var currentActiveProject = all_projects[i]
        }
    }
    currentActiveProject.todolist.push(newTask)

    deleteBtnT.addEventListener('click', function(e) {
        if (e.target) {
            deleteTask(e.target)
        }
    })

    var divider = document.createElement('div')
    var taskTab = document.createElement('input')
    taskTab.setAttribute('type', 'checkbox')
    taskTab.setAttribute('class', 'task')
    taskTab.setAttribute('id', String(newTask.title))

    var newlabel = document.createElement("Label");
    newlabel.setAttribute("for", String(newTask.title))
    newlabel.setAttribute("class", 'task_l')
    newlabel.innerHTML = String(newTask.title);

    divider.appendChild(taskTab)
    divider.appendChild(newlabel)
    divider.appendChild(deleteBtnT)
    tasks.insertBefore(divider, addtaskBtn)
}
//some bugs with checked boxes
export default addTask