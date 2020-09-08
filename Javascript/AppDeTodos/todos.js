var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonELement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoELement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    var linkText = document.createTextNode("Excluir");

    var positionArray = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo( " + positionArray + " )");

    linkElement.setAttribute("href", "#");
    linkElement.appendChild(linkText);

    todoELement.appendChild(todoText);
    todoELement.appendChild(linkElement);
    listElement.appendChild(todoELement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToLocalStorage();
}

buttonELement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
