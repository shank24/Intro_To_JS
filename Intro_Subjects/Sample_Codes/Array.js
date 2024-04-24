var expense = [12,20,13,45,50,6,7]

let totalValue = expense.reduce((sum,value) => sum + value,0)
console.log(totalValue);

let sortedArray = expense.sort((a,b) => a-b)
console.log(sortedArray);

console.log(sortedArray[0]);
console.log(sortedArray[6]);
