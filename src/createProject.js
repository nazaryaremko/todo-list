function createProject(title, description, dueDate, priority, todolist) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        todolist: todolist
    }
}

export default createProject