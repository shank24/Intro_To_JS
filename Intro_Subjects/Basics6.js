//Receiving Class From Other Class
const Person = require('./Basics8')

//String Demo

let day = "Monday"
console.log(day.length);

//Slice
console.log(day.slice(0,5));

//Specific Char
console.log(day[1]);
console.log(day.split("d"));

//ParseInt
let date1 = "24"
let date2 = "27"
console.log(parseInt(date2)-parseInt(date1));

//Concatenate String
let newCode = day + " Is Funday"
console.log(newCode);
console.log(newCode.indexOf("day"));

//How many time specific string occur
let count = 0
let value = newCode.indexOf("day")
while(value!==-1){
    count++
    value = newCode.indexOf("day",value+1)
}
console.log("Day Occurred : " + count);

//Receiving Class

let personObject = new Person("Shankar", "Om")
console.log(personObject.fullName());
