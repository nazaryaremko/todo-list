import createProject from './createProject.js';
import displayTasks from './displayTasks.js';

var all_projects = []

function renderProjects() {
    var btnContainer = document.getElementById('projects');
    var btns = btnContainer.getElementsByClassName('project');

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
      
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
                this.className += " active";
        });
      }
}

function addProject() {
    var projects = document.getElementById('projects')
    var addBtn = document.getElementById('add-pr')

    var newProject = createProject(prompt('Name'), '', '', '', [])
    all_projects.push(newProject)

    var projectTab = document.createElement('button')
    projectTab.setAttribute('class', 'project')
    projectTab.setAttribute('id', String(newProject.title))
    projectTab.innerHTML = newProject.title

    projectTab.addEventListener('click', function(e) {
        if (e.target) {
            displayTasks(e.target)
        }
    })

    projects.insertBefore(projectTab, addBtn)
    renderProjects();
}

export {all_projects};
export default addProject;