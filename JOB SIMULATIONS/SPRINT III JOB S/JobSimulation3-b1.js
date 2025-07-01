const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');
  const taskText = document.createElement('div');
  taskText.className = 'task-text';
  taskText.textContent = taskInput.value;

  const completeButton = document.createElement('button');
  completeButton.className = 'complete-btn';
  completeButton.textContent = 'Done';
  completeButton.onclick = () => {
    taskText.classList.toggle('strikethrough');
  };

  const removeButton = document.createElement('button');
  removeButton.className = 'remove-btn';
  removeButton.textContent = 'Delete';
  removeButton.onclick = () => {
    li.remove();
  };

  li.appendChild(taskText);
  li.appendChild(completeButton);
  li.appendChild(removeButton);
  taskList.appendChild(li);

  taskInput.value = '';
}