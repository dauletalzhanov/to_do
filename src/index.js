import "./style.css"

import Project from "./project"
import Task from "./task"

let newProjectButton = document.querySelector("#new_project")
let projectList = document.querySelector("#project_list")

newProjectButton.addEventListener("click", function(){
	if(document.querySelectorAll("new-input").length > 0){
		return // insert one at a time
	}
	
	let newProject = document.createElement("p")

	let newInput = document.createElement("input")
	newInput.classList.add("new-input")

	const def = document.querySelector("#default")

	newInput.setAttribute("type", "text")
	newInput.setAttribute("placeholder", "please enter a name")
	
	let project = new Project("filler")

	newProject.appendChild(newInput)
	
	projectList.insertBefore(newProject, def.nextSibling)

	newInput.style.backgroundColor = "#eeeeee"
	newInput.focus()
	
	newInput.addEventListener("focusout", function(){
		if(newInput.value.length == 0){
			projectList.removeChild(newProject)
			return
		}
		newProject.innerHTML = newInput.value
	})

	newProject.addEventListener("dblclick", function(){
		if(document.querySelectorAll(".edit-input").length > 0){
			return //edge case for an existing edit input
		}

		let anotherInput = document.createElement("input")
		anotherInput.value = newProject.innerText
		anotherInput.classList.add("edit-input")
		anotherInput.style.backgroundColor = "#eeeeee"

		newProject.innerHTML = ""
		newProject.appendChild(anotherInput)

		anotherInput.addEventListener("focusout", function(){
			newProject.innerHTML = anotherInput.value

		})
	})

})