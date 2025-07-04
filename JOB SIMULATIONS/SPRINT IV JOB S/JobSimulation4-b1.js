const employees = [
  { name: "Alice", age: 28, department: "HR", role: "Recruiter", salary: 40000 },
  { name: "Bob", age: 34, department: "Engineering", role: "Developer", salary: 60000 },
  { name: "Charlie", age: 29, department: "Marketing", role: "Analyst", salary: 45000 },
  { name: "Diana", age: 41, department: "Engineering", role: "Developer", salary: 75000 },
  { name: "James", age: 28, department: "Marketing", role: "Analyst", salary: 95000 },
  { name: "Anie", age: 29, department: "Engineering", role: "Developer", salary: 70000 },
  { name: "Jacob", age: 48, department: "HR", role: "Recruiter", salary: 45000 },
  { name: "Agnel", age: 38, department: "Marketing", role: "Analyst", salary: 75000 },
  { name: "Daryl", age: 44, department: "HR", role: "Recruiter", salary: 35000 },
  { name: "John", age: 31, department: "Engineering", role: "Developer", salary: 95000 },
];

function renderTable(employees) {
  const tbody = document.getElementById("employeeTable");
  tbody.innerHTML = "";
  employees.forEach(emp => {
    const row = `<tr>
      <td>${emp.name}</td>
      <td>${emp.age}</td>
      <td>${emp.department}</td>
      <td>${emp.role}</td>
      <td>${emp.salary}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function convertToUppercase() {
  employees.forEach(emp => emp.name = emp.name.toUpperCase());
  renderTable(employees);
}

function calculateAverageSalary() {
  const avg = employees.reduce((acc, emp) => acc + emp.salary, 0) / employees.length;
  document.getElementById("averageSalary").textContent =`Average Salary: ₹${avg.toFixed(2)}`;
}

document.getElementById("departmentFilter").addEventListener("change", () => {
  const dept = document.getElementById("departmentFilter").value;
  const filtered = dept ? employees.filter(emp => emp.department === dept) : employees;
  renderTable(filtered);
});

document.getElementById("searchInput").addEventListener("input", () => {
  const name = document.getElementById("searchInput").value.trim().toLowerCase();
  const found = employees.find(emp => emp.name.toLowerCase() === name);
  document.getElementById("searchResult").textContent = found
    ?`Found: ${found.name}, Role: ${found.role}`
    : "No match found";
});

renderTable(employees);