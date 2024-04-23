//Function Demo

function add (a,b)
{
return a+b
}
let value = add(1,5)
console.log(value);

//Anonymous Function
let sum = function(c,d){
    return c+d
}

//Anonymous Function Other Way
let sum1 = (c,d)=> c+d
console.log(sum1(5,9))

//Scope of Variable
//var - Global Level/Function Level

var greet = "Evening"
if(1==1){
    var greet = "After-Noon"
    console.log(greet);
}