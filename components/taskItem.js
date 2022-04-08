function tasksItemComponent(task) {
  // You are going to add your HTML design here.
  // Do the option design in HTML page, test it, and replace it if you need instead of this code.
  // For any variables, just use the interpolation operation ${} and pass the variable
  const checked = task.done ? "checked" : "";
  return `
              <div class="todo-item bg-primary m-2 p-1 text-dark bg-opacity-10 rounded">
                <input 
                class="form-check-input my-2 mx-2" 
                  type="checkbox"
                  ${checked} 
                  onchange="taskChecked(${task.id}, this.checked)"
                />
                <div class="my-2">
                  <h6>${task.category}</h6>
                  <p>${task.title}</p>
                </div>
                
              </div>
      `;
}
