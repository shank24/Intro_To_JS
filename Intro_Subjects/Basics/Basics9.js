const Person1 = require("./Basics8");

//Inheritance Demo
const Person = require('./Basics8')

class Pet extends Person
{
    get location(){
        return "Red-Cross"
    }
    constructor(fName,lName)
    {
     //Call Parent Class Constructor
     super(fName,lName)
    }

}

let petObj = new Pet("Dog","Bow")
console.log(petObj.fullName());
console.log(petObj.location);