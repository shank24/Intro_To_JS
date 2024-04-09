let marks = Array(6)
marks = new Array(10,20,30,40,50,60)

//Splitting an array
subArray = marks.slice(0,3)
console.log(subArray);


//Shortcut
var marks1 = [1,2,3,4,5,6]
console.log(marks1[1]);
console.log(marks);

//Length
console.log(marks.length);

//Append at the end.
marks.push(55)
console.log(marks);

//Delete from the end
marks.pop()
console.log(marks);

//Add at the beginning
marks.unshift(85)
console.log(marks);


//Get Index
console.log(marks.indexOf(10));

//Element Present
console.log(marks.includes(20));

let sum = 0
//Iterate
for (let index = 0; index < marks.length; index++) {
    console.log( marks[index]);
    sum = sum + marks[index]
 }
 console.log("Summation of the array is :: " + sum);
