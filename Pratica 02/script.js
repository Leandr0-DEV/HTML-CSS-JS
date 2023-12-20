document.addEventListener("DOMContentLoaded", () => {
  // Recuperando a lista de tarefas do armazenamento local
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Atualizando a exibição da lista
  updateTaskList();

  // Adicionando evento para a tecla "Enter" no campo de entrada
  document
    .getElementById("taskInput")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });

  // Função para adicionar uma nova tarefa
  window.addTask = function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      tasks.push({ text: taskText, completed: false });
      taskInput.value = "";
      updateTaskList();
    }
  };

  // Função para marcar uma tarefa como concluída ou não concluída
  window.toggleTask = function (index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
  };

  // Função para remover uma tarefa
  window.deleteTask = function (index) {
    tasks.splice(index, 1);
    updateTaskList();
  };

  // Função para atualizar a exibição da lista de tarefas
  function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                  <span class="task-text ${
                    task.completed ? "completed" : ""
                  }" onclick="toggleTask(${index})">
                      ${task.text}
                  </span>
                  <button class="delete-button" onclick="deleteTask(${index})">Excluir</button>
              `;
      taskList.appendChild(listItem);
    });

    // Salvando a lista de tarefas no armazenamento local
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
