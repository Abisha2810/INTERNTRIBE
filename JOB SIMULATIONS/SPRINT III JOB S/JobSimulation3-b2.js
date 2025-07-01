async function fetchUserData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  populateTable(users);
}

function populateTable(users) {
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
        <button class="btn-edit">Edit</button>
        <button class="btn-remove">Delete</button>
      </td>`;

    const editButton = tr.querySelector(".btn-edit");
    const deleteButton = tr.querySelector(".btn-remove");

    editButton.addEventListener("click", () => toggleEdit(tr, editButton));
    deleteButton.addEventListener("click", () => tr.remove());

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
  button.className = isEditing ? "btn-edit" : "btn-save";
}

fetchUserData();