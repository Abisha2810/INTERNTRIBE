var ul = document.getElementById('list-container');
var input = document.getElementById('input');

function add() {
    var listitem = document.createElement('li');
    var div = document.createElement('div');
    div.textContent = input.value;
    var doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.onclick = function () {
        div.classList.toggle('done');
    };
    var overBtn = document.createElement('button');
    overBtn.textContent = 'Delete';
    overBtn.onclick = function (event) {
        event.target.parentElement.remove();
    };
    listitem.appendChild(div);
    listitem.appendChild(doneBtn);
    listitem.appendChild(overBtn);
    ul.appendChild(listitem);
    input.value = '';
}