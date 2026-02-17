var todoForm = document.getElementById("todoForm");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var text = taskInput.value.trim();

  if (text === "") {
    taskInput.focus();
    return;
  }

  var li = document.createElement("li");
  li.className = "list__item";

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task__checkbox";

  var span = document.createElement("span");
  span.className = "task__text";
  span.textContent = text;

  var deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "task__delete";
  deleteButton.innerHTML =
    '<svg class="trash-icon" viewBox="0 0 24 24">' +
    '<path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 7h2v9h-2v-9zm4 0h2v9h-2v-9zM7 10h2v9H7v-9zm-1 11h12a2 2 0 0 0 2-2V7H4v12a2 2 0 0 0 2 2z"/>' +
    "</svg>";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.add("task--done");
    } else {
      li.classList.remove("task--done");
    }
  });

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
});
