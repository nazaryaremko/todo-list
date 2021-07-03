function createTask(title, dueDate, priority, status) {
    return {
        title: title,
        dueDate: dueDate,
        priority: priority,
        status: status
    }
}

export default createTask