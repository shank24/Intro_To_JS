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
    //console.log(greet);
}

//Let - Global Level or Block Level 
let greet1 = "Evening Let"
if(2==2){
    //It is not visible, outside of the block.
    let greet1 = "After-Noon Let"
    console.log(greet1);
}

console.log(greet1);

//Const - Same as Let, except it cannot be re-initialized, as it is used for Constant