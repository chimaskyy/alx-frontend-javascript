// // Create the DirectorInterface interface with the 3 expected methods
// // Create the TeacherInterface interface with the 3 expected methods
// interface DirectorInterface {
//    workFromHome: () => string;
//    getCoffeeBreak: () => string;
//    workDirectorTasks: () => string; 
// }

// interface TeacherInterface extends DirectorInterface {}

// class Director {
//    workFromHome() {
//     return "Currently working";
//   }
// }

// class Teacher {
//   workFromHome() {
//     return "Currently working";
//   }
// }
// function createEmployee(salary: number | string){
//     if (typeof salary === 'number' && salary < 500) {
//         return Teacher;
//     }
//     return Director;
// }

// function isDirector(employee){}

// function executeWork(employee){
//     if (employee instanceof 'Director'){
//         workDirectorTasks();
//     }
//     if (employee instanceof 'Teacher') {
//         workTeacherTasks();
//     }
// }

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    if (todayClass === 'History') {
        return 'Teaching History';
    }
}