// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Chiamaka",
  lastName: "Jess",
  age: 23,
  location: "Rwanda",
};

const student2: Student = {
  firstName: "Jessica",
  lastName: "Amy",
  age: 20,
  location: "Kenya",
};

const studentsList: Student[] = [student1, student2];

const style = document.createElement("style");

// Add CSS rules to the style element
style.textContent = `
  table {
    border-collapse: collapse;
    width:50%;
  }
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;

// Append the style element to the <head> of HTML document
document.head.appendChild(style);

const table = document.createElement("table");
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell();
headerCell1.textContent = "First Name";
const headerCell2 = headerRow.insertCell();
headerCell2.textContent = "Location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstName = row.insertCell();
  const location = row.insertCell();
  

  firstName.textContent = student.firstName;
  location.textContent = student.location;

  row.appendChild(firstName);
  row.appendChild(location);
});
document.body.appendChild(table);
