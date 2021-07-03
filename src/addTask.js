import createTask from './createTask.js';
import {all_projects} from './addProject.js';

function changeStatus (currentActiveProject, task) {
    console.log(currentActiveProject.todolist)
    console.log(task)

    for (var i = 0; i < currentActiveProject.todolist.length; i++) {
        if (task.id == currentActiveProject.todolist[i].title && currentActiveProject.todolist[i].status == 'not done') {
            currentActiveProject.todolist[i].status = 'done'
        } else if (task.id == currentActiveProject.todolist[i].title && currentActiveProject.todolist[i].status == 'done') {
            currentActiveProject.todolist[i].status = 'not done'
        }
    }

}
function addTask () {
    var newTask = createTask(prompt('Name'), '', '', 'not done')
    var tasks = document.getElementById('tasks')
    var addtaskBtn = document.getElementById('add-ts')

    var container = document.getElementById('projects')
    var currentButton = container.getElementsByClassName('project active')
    
    for (var i = 0; i < all_projects.length; i++) {
        if (currentButton.item(0).id == all_projects[i].title) {
            var currentActiveProject = all_projects[i]
        }
    }
    currentActiveProject.todolist.push(newTask)
    console.log(all_projects)

    var taskTab = document.createElement('input')
    taskTab.setAttribute('type', 'checkbox')
    taskTab.setAttribute('class', 'task')
    taskTab.setAttribute('id', String(newTask.title))
    
    var newlabel = document.createElement("Label");
    newlabel.setAttribute("for", String(newTask.title))
    newlabel.setAttribute("class", 'task')
    newlabel.innerHTML = String(newTask.title);

    tasks.insertBefore(taskTab, addtaskBtn)
    tasks.insertBefore(newlabel, addtaskBtn)

    taskTab.addEventListener('change', function () {
        if (this.checked) {
            changeStatus(currentActiveProject, this)
            console.log(all_projects)
        } else {
            changeStatus(currentActiveProject, this)
            console.log(all_projects)
        }
    })
}
//some bugs with checked boxes
export default addTask