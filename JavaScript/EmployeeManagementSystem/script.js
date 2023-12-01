const form = document.getElementById("ems");
const recordContainer = document.getElementById("records-container");
const createButton = document.querySelector("#ems button");
let empId = 1000;
const employeeList = [];
let formStatus = "CREATE";

const onSubmit = (event) => {
  event.preventDefault();
  const employee = {
    employeeId: ++empId,
    name: event.target.name.value,
    mail: event.target.mail.value,
    mobile: event.target.mobile.value,
    salary: event.target.salary.value,
    qualification: event.target.qualification.value,
    role: event.target.role.value,
  };

  if (formStatus === "CREATE") {
    createNewEmployee(employee);
  } else if (formStatus === "UPDATE") {
    formStatus = "CREATE";
    createButton.innerText = "Create Employee";
  }
  //   After adding values reset the form
  form.reset();
};

function createNewEmployee(employee) {
  // create new table row
  const row = document.createElement("tr");
  for (let key in employee) {
    // create new cell
    const cell = document.createElement("td");
    cell.innerText = employee[key];
    row.appendChild(cell);
  }
  //   create edit icon button
  const editIcon = document.createElement("span");
  editIcon.innerText = "edit";
  editIcon.className = "material-symbols-outlined";
  editIcon.style.color = "blue";
  editIcon.setAttribute("data-empId", employee.employeeId);
  editIcon.addEventListener("click", editRecord);

  //   create delete icon button
  const deleteIcon = document.createElement("span");
  deleteIcon.innerText = "delete";
  deleteIcon.className = "material-symbols-outlined";
  deleteIcon.style.color = "red";
  deleteIcon.setAttribute("data-empId", employee.employeeId);
  deleteIcon.addEventListener("click", deleteRecord);

  row.append(editIcon, deleteIcon);
  recordContainer.appendChild(row);
  employeeList.push(employee);
}

function editRecord(event) {
  const editButton = event.target;
  const currentEmployeeId = parseInt(editButton.getAttribute("data-empId"));
  for (let i = 0; i < employeeList.length; i++) {
    if (currentEmployeeId === employeeList[i].employeeId) {
      console.log(employeeList);
      fillFormWithRecord(employeeList[i]);
      break;
    }
  }
}

function fillFormWithRecord(employee) {
  for (let key in employee) {
    if (key !== "employeeId") {
      form[key].value = employee[key];
    }
  }
  createButton.innerText = "Update Employee";
  formStatus = "UPDATE";
}

function deleteRecord(event) {
  if (formStatus === "UPDATE") {
    alert("Please update the record before deleting anything");
    return;
  }
  const deleteButton = event.target;
  const record = deleteButton.parentNode;
  record.remove();
  const currentEmp = parseInt(deleteButton.getAttribute("data-empId"));
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].employeeId === currentEmp) {
      employeeList.splice(i, 1);
      break;
    }
  }
}

form.addEventListener("submit", onSubmit);
