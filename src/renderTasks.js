function renderTasks(project, task) {
    for (var i = 0; i < project.todolist.length; i++) {
        if (task.id == project.todolist[i].title && project.todolist[i].status == 'not done') {
            project.todolist[i].status = 'done'
        } else if (task.id == project.todolist[i].title && project.todolist[i].status == 'done') {
            project.todolist[i].status = 'not done'
        }
    }

}

export default renderTasks