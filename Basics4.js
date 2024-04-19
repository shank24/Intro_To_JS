//Sorting String Array
var fruit = ["Banana","Mango","Apple","Orange"]
fruit.sort()
console.log(fruit);

//Sorting Integer
var number = [12,003,19,16,14]
console.log(number.sort());

//Traditional Way
number.sort(function(a,b){
    return a-b
})

//Anonymous Function
console.log(number.sort( (a,b)=> a-b));

