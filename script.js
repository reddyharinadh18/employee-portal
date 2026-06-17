var employeeName = prompt("Enter Employee Name");
let employeeAge = Number(prompt("Enter Employee Age"));
const companyName = "Stackly";

console.log("Employee Name :", employeeName);
console.log("Employee Age :", employeeAge);
console.log("Company Name :", companyName);

alert("Welcome to Employee Portal");

let taskCompleted = confirm("Have you completed today's task?");
console.log("Task Completed :", taskCompleted);

document.writeln("<h2>Welcome " + employeeName + "</h2>");

console.warn("Task submitted successfully");
console.error("Task submission failed");

employeeAge++;

console.log("Updated Employee Age :", employeeAge);