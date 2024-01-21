const studentForm = document.querySelector(".studentForm");
const table = document.querySelector('.studentTable');

let students = [];

function displayStudents(){
    table.innerHTML = ''
    students.forEach(student => {
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>${student.firstNameInput}</td>
        <td>${student.secondNameInput}</td>
        <td>${student.ageInput}</td>
        <td>${student.courseInput}</td>
        <button class="btnDelete" data-index="${students.indexOf(student)}">Delete</button>
        `
        table.appendChild(row)

        console.log(row);
    })
}

studentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const firstNameInput = document.querySelector('.firstNameInput').value
    const secondNameInput = document.querySelector('.secondNameInput').value
    const ageInput = document.querySelector('.ageInput').value
    const courseInput = document.querySelector('.courseInput').value

    if (!firstNameInput || !secondNameInput || !ageInput || !courseInput){
        alert("Error")
        return
    }

    const newStudent = { firstNameInput, secondNameInput, ageInput, courseInput }
    students.push(newStudent)
    saveStudents()
    displayStudents()

    console.log(newStudent);
})

function saveStudents(){
    localStorage.setItem('students', JSON.stringify(students))
}

table.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnDelete')){
        const i = parseInt(e.target.dataset.index, 10);
        students.splice(i, 1);
        saveStudents()
        displayStudents()
    }
});