'use strict';

let EpicFV = function(epicR, hasAn){
    this.epicR = epicR;
    this.hasAn = hasAn;
}

// Create a prototype for the epicFV object
EpicFV.prototype.generateRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
EpicFV.prototype.dLikes = function(){
    let views, percentage;
    views = this.generateRandom(10, 30) * this.epicR;
    if (this.hasAn){
        percentage = 0.75;
    } else {
        percentage = 0.40;
    }

    return Math.round(views * percentage);
}
EpicFV.prototype.wLikes = function(){
    let total = 0;
    for (let i = 0; i < 7; i++){
        total += this.dLikes();
    }
    return total;
}
let pkcourF = new EpicFV(7, false)
let corgF = new EpicFV(4, true)

console.log(`D likes: ${pkcourF.dLikes()}`);
console.log(`D likes: ${corgF.dLikes()}`);

console.log(`W likes: ${pkcourF.wLikes()}`);
console.log(`W likes: ${corgF.wLikes()}`);

console.log(pkcourF.generateRandom(1, 5));
console.log(corgF.generateRandom(10, 25));

console.log(Math.floor(-7.75));

function generateTable(arr){
    let tbl = document.createElement('table');
    for (let row in arr[0]){
        let tblRow, tblCell;
        tbl.insertRow(tblRow);
        tblCell = tblRow.insertRow(0);
        tblCell.innerText = arr[0][row];
        tblCell = tblRow.insertRow(1);
        tblCell.innerText = arr[1][row]
    }
    document.body.appendChild(tbl);
}
function compareNum(n1, n2){
    if (n1 < n2){
        return n1 * n2;
    } else {
        console.log(`${n1} is greater than ${n2}.`);
    }
    return console.log(`Yes, ${n2} is less than ${n1}.`);
}
compareNum(9, 3);

/**
 * Object prototype in JS
 * https://medium.freecodecamp.org/a-guide-to-prototype-based-class-inheritance-in-javascript-84953db26df0
 */