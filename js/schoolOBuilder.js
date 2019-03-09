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
schools.push(codePartners, hogwarts)

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