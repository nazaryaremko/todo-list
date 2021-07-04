import addProject from './addProject.js';
import addTask from './addTask.js';
import renderTasks from './renderTasks.js';
import {all_projects} from './addProject.js';

var addNewPr = document.getElementById('add-pr')
addNewPr.addEventListener('click', function() {
    addProject();
})

var addNewTs = document.getElementById('add-ts')
addNewTs.addEventListener('click', function() {
    addTask();
})

tasks.addEventListener('change', (event) => {
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
    if (event.target.checked) {
        renderTasks(currentActiveProject, event.target)
    } else {
        renderTasks(currentActiveProject, event.target)
    }
})

