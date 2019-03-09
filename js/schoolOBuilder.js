'use strict'
let schools = []
let hours = ['6am', '7am', '8am', '9am', '10am', '11am']
let School = function(name, min, max, spellsPerStudent){
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
schools.push(codePartners, hogwarts, einstein)

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