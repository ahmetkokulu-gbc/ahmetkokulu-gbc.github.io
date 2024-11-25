const employees = [
  { name: "John Doe", position: "Software Engineer" },
  { name: "Jane Smith", position: "Project Manager" },
  { name: "Emily Johnson", position: "UI/UX Designer" },
];

const employeeList = document.getElementById("employee-list");

function renderEmployees() {
  employeeList.innerHTML = "";
  employees.forEach(emp => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${emp.name}</strong>: ${emp.position}`;
    employeeList.appendChild(listItem);
  });
}

renderEmployees();
