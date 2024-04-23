//Object Demo
//Object is a collection of a properties 

let person ={
    firstName : "Jim ",
    lastName : "Jacobs",
    age : 25,
    fullName: function(){
        console.log(this.firstName + this.lastName);
    }
}

//Specific to Function Value
console.log(person.fullName());
//Printing an Object
console.log(person.lastName);
console.log(person['lastName']);

//Adding a property
person.gender = 'Male'
console.log(person);

//Deleting an object
delete person.gender
console.log(person);

//Checking Property Present
console.log('gender' in person);

//Printing Values of all JS Object
for(let key in person)
{
    console.log(person[key]);
}