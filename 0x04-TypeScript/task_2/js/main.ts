// Create the DirectorInterface interface with the 3 expected methods
// Create the TeacherInterface interface with the 3 expected methods
// Create a class Director that will implement DirectorInterface
// Create a class Teacher that will implement TeacherInterface

interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workTeacherTasks: () => string;
  workFromHome: () => string;
  getCoffeeBreak: () => string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Currently working";
  }
  getCoffeeBreak() {
    return "Getting a coffe break";
  }
  workDirectorTasks() {
    return "Getting to diretore task";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}
// Create a function createEmployee
// It can return either a Director or a Teacher instance
// It accepts 1 arguments, salary(either number or string)
// if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Write a function isDirector, employee as an argument
// used as a type predicate and if the employee is a director
// Write a function executeWork:
// it accepts employee as an argument
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// String literal type named Subjects allowing a variable to have the value Math or History
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  if (todayClass === "History") {
    return "Teaching History";
  }
}

// test
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(teachClass("Math"));
console.log(teachClass("History"));
