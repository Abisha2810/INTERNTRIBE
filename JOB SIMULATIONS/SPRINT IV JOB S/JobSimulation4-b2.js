const loadBtn = document.getElementById('loadBtn');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const notifyBtn = document.getElementById('notifyBtn');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const taskContainer = document.getElementById('taskContainer');
const notificationPanel = document.getElementById('notificationPanel');

let tasks = [];
let intervals = {};

function fakeFetchTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Design UI", progress: 0, status: "Pending" },
                { id: 2, name: "Develop Backend", progress: 0, status: "Pending" },
                { id: 3, name: "Write Tests", progress: 0, status: "Pending" },
                { id: 4, name: "Integrate API", progress: 0, status: "Pending" },
                { id: 5, name: "Fix Bugs", progress: 0, status: "Pending" },
                { id: 6, name: "Deploy App", progress: 0, status: "Pending" },
                { id: 7, name: "Write Docs", progress: 0, status: "Pending" },
                { id: 8, name: "Client Review", progress: 0, status: "Pending" },
                { id: 9, name: "Update Features", progress: 0, status: "Pending" },
                { id: 10, name: "Backup Database", progress: 0, status: "Pending" }
            ]);
        }, 2000);
    });
}

async function loadTasks() {
  taskContainer.innerHTML = "Loading...";
  const data = await fakeFetchTasks();
  tasks = data;
  renderTasks();
  startBtn.disabled = false;
  notifyBtn.disabled = false;
}

function renderTasks() {
  taskContainer.innerHTML = "";
  tasks.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.className = `task ${task.status === "Completed" ? "completed" : "in-progress"}`;
    taskDiv.id = `task-${task.id}`;
    taskDiv.innerHTML = 
      `<h3>${task.name}</h3>
      <p>Status: <span>${task.status}</span> | Progress: <span>${task.progress}%</span></p>
      <div class="progress-bar">
        <div class="progress-bar-inner" style="width: ${task.progress}%"></div>
      </div>`
    ;
    taskContainer.appendChild(taskDiv);
  });
}

function startProgress() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  tasks.forEach(task => {
    if (task.progress >= 100) return;

    intervals[task.id] = setInterval(() => {
      if (task.progress < 100) {
        task.progress += 10;
        task.status = "In Progress";
        if (task.progress >= 100) {
          task.progress = 100;
          task.status = "Completed";
          clearInterval(intervals[task.id]);
          playCompleteEffect(task.id);
        }
        renderTasks();
      }
    }, 1000);
  });
}

function stopProgress() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  Object.keys(intervals).forEach(id => clearInterval(intervals[id]));
}

function showDelayedNotification() {
  setTimeout(() => {
    notificationPanel.innerText = "📢 Delayed Notification: Tasks are being processed!";
  }, 3000);
}

function playCompleteEffect(taskId) {
  const taskEl = document.getElementById(`task-${taskId}`);
  if (taskEl) {
    taskEl.style.borderColor = "green";
    // Optional: add audio or animation here
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

loadBtn.addEventListener("click", loadTasks);
startBtn.addEventListener("click", startProgress);
stopBtn.addEventListener("click", stopProgress);
notifyBtn.addEventListener("click", showDelayedNotification);
toggleThemeBtn.addEventListener("click", toggleTheme);