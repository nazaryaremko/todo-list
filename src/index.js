import addProject from './addProject.js';
import addTask from './addTask.js';

var addNewPr = document.getElementById('add-pr')
addNewPr.addEventListener('click', function() {
    addProject();
})

var addNewTs = document.getElementById('add-ts')
addNewTs.addEventListener('click', function() {
    addTask();
})
