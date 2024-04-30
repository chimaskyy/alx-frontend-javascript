export default function updateStudentGradeByCity(students, city, newGrades) {
  const newList = students.filter((student) => student.location === city)
                .map((student) => student.newGrades) {
                    const sameGrade = newGrades.find((gra) => gra.studentId === student.id)
                    const stuGrade = sameGrade ? sameGrade.grade : 'N/A';
                }
                return {...student, grade:stuGrade};
            }
                }
}
