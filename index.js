// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = []; // array of objects according to sample ==>
let categories = ["Select Continent"]; // array of strings according to sample ==>

renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  //continue the code here
  tasks[taskId]["done"] = checked;
  alert(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  var selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  if (selectedCategory === "Select Continent") {
    selectedCategory = "Uncategorized";
    alert("Choose a category!");
    return;
  }
  tasks.push({
    id: tasks.length,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  });
  alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
  renderTasks(tasks, "tasks-list");
}

function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  categories.push(newCategory);
  alert(`New category was added: ${newCategory}`);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  // REMOVE ME: sample alert
  if (done) {
    var filteredTasks = tasks.filter(
      (task) => task["category"] === selectedCategory && task["done"] === true
    );
  } else {
    var filteredTasks = tasks.filter(
      (task) => task["category"] === selectedCategory
    );
  }
  alert(`Category: ${selectedCategory} | done: ${done}`);
  renderTasks(filteredTasks, "tasks-list");
}

// my addition

// REMOVE ME: SAMPLE FILLING
/*
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];

categories = ["Movies", "Groceries"];
// SAMPLE

*/
