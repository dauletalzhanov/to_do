class Task {
	constructor(title, description, dueDate){
		this.title = title
		this.description = description
		this.dueDate = dueDate
		this.priority = (255,255,255)

		this.completed = false
	}

	setPriority(priority){
		this.priority = priority
	}

	setDate(dueDate){
		this.dueDate = dueDate
	}

	
}

export default Task