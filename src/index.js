document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("#create-task-form");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const taskInput = document.getElementById("new-task-description").value;
		buildToDo(taskInput);
	});

	function buildToDo(describeTask) {
		const listedTask = document.createElement("li");
		listedTask.textContent = describeTask;
		document.querySelector("#tasks").append(listedTask);
	}
});
