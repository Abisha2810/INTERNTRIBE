async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  add(users);
}

function add(users) {
  const tbody = document.querySelector("#userTable tbody");
  users.forEach((user) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
          <td>${user.id}</td>
          <td contenteditable="false">${user.name}</td>
          <td contenteditable="false">${user.username}</td>
          <td contenteditable="false">${user.email}</td>
          <td contenteditable="false">${user.phone}</td>
          <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </td>`;
    const editBtn = tr.querySelector(".edit");
    const deleteBtn = tr.querySelector(".delete");

    editBtn.addEventListener("click", () => toggleEdit(tr, editBtn));
    deleteBtn.addEventListener("click", () => tr.remove());

    tbody.appendChild(tr);
  });
}

function toggleEdit(row, button) {
  const isEditing = button.textContent === "Save";
  const cells = row.querySelectorAll("td");
  for (let i = 1; i <= 4; i++) {
    cells[i].contentEditable = !isEditing;
  }

  button.textContent = isEditing ? "Edit" : "Save";
  button.className = isEditing ? "edit" : "save";
}
fetchData();
