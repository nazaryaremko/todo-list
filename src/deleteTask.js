import {all_projects} from './addProject.js';

function deleteTask(node) {
    var parentNode = node.parentNode

    var cur_projects = projects.getElementsByClassName('project')
    for (var i = 0; i < cur_projects.length; i++) {
        if (cur_projects.item(i).className == 'project active') {
            var currentActiveProjectDOM = cur_projects.item(i)
        }
    }
    for (var i = 0; i < all_projects.length; i++) {
        if (all_projects[i].title == String(currentActiveProjectDOM.innerText)) {
            var currentActiveProject = all_projects[i]
        }
    }
    
    for (var i=0; i < currentActiveProject.todolist.length; i++) {
        if (currentActiveProject.todolist[i].title == parentNode.childNodes[0].id) {
            currentActiveProject.todolist.splice(i,1)
        }
    }
    parentNode.remove()
}

export default deleteTask