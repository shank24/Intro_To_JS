var productPrices =[10,20,30,40,50,1000]

//Map Operation - Discount By 10%
let discountBy10 = productPrices.map(value => value*.10)
console.log(discountBy10);

//Filter Below $50
let productBelow50=discountBy10.filter(value=>value<50)
console.log(productBelow50);

let totalCost = productBelow50.reduce((a,b)=> a+b,0)
console.log(totalCost);