const but1=document.getElementById('but1');
const but2=document.getElementById('but2');
const but3=document.getElementById('but3');
const but4=document.getElementById('but4');
const but5=document.getElementById('but5');
const taskContainer=document.getElementById('taskContainer');
const notify=document.getElementById('notify');
let tasks=[];
let intervals={};
function FetchTask() {
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
async function LoadTask() {
    taskContainer.innerHTML="Loading.......";
    const data=await FetchTask();
    tasks=data;
    DisplayTask();
    but2.disabled=false;
    but4.disabled=false;
}
function DisplayTask()
{
    taskContainer.innerHTML='';
    tasks.forEach(task=>
    {
        const div=document.createElement('div');
        div.className=`task ${task.status === "Completed" ? "completed" : "in-progress"}`;
        div.id=`task-${task.id}`;
        div.innerHTML=`<h3>${task.name}</h3>
        <p>Status : <span>${task.status}</span> | Progress : <span>${task.progress}%</span></p>
        <div class="main-bar">
           <div class="bar" style="width:${task.progress}%"></div>
        <div>`;
        taskContainer.appendChild(div);
    });
}
function StartTask()
{
    but2.disabled=true;
    but3.disabled=false;
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
          EffectTask(task.id);
        }
        DisplayTask();
      }
    }, 1000);
  });
}
function StopTask()
{
    but2.disabled=false;
    but3.disabled=true;
    Object.keys(intervals).forEach(id=>clearInterval(intervals[id]));
}
function DelayNotify()
{
    setTimeout(()=>
    {
        notify.innerText="📢 Delayed Notification: Tasks are being processed!"
    },3000);
}
function EffectTask(TaskId)
{
  const Task=document.getElementById(`task-${TaskId}`);
  if(Task)
  {
    Task.style.borderColor="navy";
  }
}
function ToggleTheme()
{
 document.body.classList.toggle('dark-mode');
}
but1.addEventListener("click",LoadTask);
but2.addEventListener("click",StartTask);
but3.addEventListener("click",StopTask);
but4.addEventListener("click",DelayNotify);
but5.addEventListener("click",ToggleTheme);

