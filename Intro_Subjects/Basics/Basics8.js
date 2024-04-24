//Exporting Class

module.exports = class Person {
    //Class Var - Age
    age = 25
    get location(){
        return "Canada"
    }
    //Constructor - Instance Variable

    constructor(fName,lName){
        this.fName=fName
        this.lName=lName
    }
    //Methods
    fullName(){
        console.log(this.fName+this.lName);
    }
}

//let p = new Person("Tim","Rob")
//console.log(p.age);
//console.log(p.location);

//Constructor is a method, which executes by default when you create object of a class.
//console.log(p.fullName());