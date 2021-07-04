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

function deleteProject(id) {
  for (var i = 0; i < projects.childNodes.length; i++) {
    if (projects.childNodes[i].id == id) {
      projects.childNodes[i].remove()
    }
  }
  for (var i = 0; i < all_projects.length; i++) {
    if (all_projects[i].title == id) {
      all_projects.splice(i,1)
    }
  }
  console.log(all_projects)
}

function addProject() {
    var projects = document.getElementById('projects')
    var addBtn = document.getElementById('add-pr')

    var deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'delete-pr')

    var newProject = createProject(prompt('Name'), '', '', '', [])
    all_projects.push(newProject)

    var divider = document.createElement('div')
    var projectTab = document.createElement('button')
    projectTab.setAttribute('class', 'project')
    divider.setAttribute('id', String(newProject.title))
    projectTab.innerHTML = newProject.title

    deleteBtn.innerText = 'Delete the project'

    projectTab.addEventListener('click', function(e) {
        if (e.target) {
            displayTasks(e.target)
        }
    })

    deleteBtn.addEventListener('click', function(e) {
      if (e.target) {
          deleteProject(divider.id)
      }
  })

    divider.appendChild(projectTab)
    divider.appendChild(deleteBtn)
    projects.insertBefore(divider, addBtn)
    renderProjects();
}

export {all_projects};
export default addProject;