'use strict'
let schools = []
let hours = ['6am', '7am', '8am', '9am', '10am', '11am']
// Reference the form and the table from the our school.html file
let schoolTable = document.getElementById('school-table')
let schoolForm = document.getElementById('school-form')
let School = function(name, min, max, spellsPerStudent)
{
    this.name = name
    this.min = min
    this.max = max
    this.spellsPerStudent = spellsPerStudent
}
School.prototype.spellsCastPerHour = function(){
    let randomNumber = Math.ceil(Math.random() * (this.max - this.min) + this.min)
    return randomNumber * this.spellsPerStudent
}
// Instantiate the school constructor function
let codePartners = new School('CodePartner', 3, 8, 3)
let hogwarts = new School('Hogwarts', 5, 9, 75)
let einstein = new School('Einstein', 2, 12, 55)
// Add the school object to the school array
// schools.push(codePartners, hogwarts, einstein)

console.log(schools)
// Reference the document body
let docBody = document.getElementById('docbody')
// Create a table
let tbl = document.createElement('table')
// Create table row
// let tblRow = document.createElement('tr')
let tblHeader = document.createElement('tr')

let tblHeaderCell = document.createElement('th')
// add the table to the doucment body
docBody.appendChild(tbl)
// add the row to the table
tbl.appendChild(tblHeader)

for (let i = 0; i < hours.length; i++){
    let tblHeaderCell = document.createElement('th')
    tblHeader.appendChild(tblHeaderCell)
    tblHeaderCell.innerText = hours[i]
}

//Create a new school prototype method
School.prototype.renderNewSchool = function(){
    // Create a new row to append to the table
    for (let j = 0; j < schools.length; j++){
        let tblRow = document.createElement('tr')
        tbl.appendChild(tblRow)
        let tblHeaderCell = document.createElement('th')
        tblRow.appendChild(tblHeaderCell)
        tblHeaderCell.innerText = schools[j].name
        for (let i = 0; i < hours.length; i++){
            let tblTd = document.createElement('td')
            tblRow.appendChild(tblTd)
            tblTd.innerText = schools[j].spellsCastPerHour()
        }
    }
}
// Go through the schools array and generate new rows to add to our table
for (let j = 0; j < schools.length; j++){
    schools[j].renderNewSchool()
}
// Reference both the table and the form from our school.html file
let schoolNameInput = schoolForm.nameOfSchool
let schoolMinStudentInput = schoolForm.minStudents

//Create an eventListener that will listen for the submit event on our form from the school.html file
schoolForm.addEventListener('submit', function(event){
    //Prevent the form submit button from default behavior, i.e send the form data immediately
    event.preventDefault()
    // Instantiate a new school object from our constructor School function
    let newSchool = new School(schoolNameInput.value, parseInt
    (schoolMinStudentInput.value), 15, 8)
    //Add the new school object to our schools array created above
    schools.push(newSchool)
    //Use our new prototype method to build table rows to add our school.html
    newSchool.renderNewSchool()
})

//We want to display school name in h2 tag
let schoolNames = document.createElement('ul')
for (let k = 0; k < schools.length; k++){
    // Create school name items (li)
    let schoolName = document.createElement('li')
    // We add the schoolName to the schoolNames (ul)
    schoolNames.appendChild(schoolName)
    // Add school name text to the schoolName li tags
    schoolName.innerText = schools[k].name
}
// Append the schooNames ul tag to the document body
docBody.appendChild(schoolNames)