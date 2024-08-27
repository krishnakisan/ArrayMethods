//Array Length
let arrLength = [1,2,3,4];
let res = arrLength.length;
//console.log(res);

// toString() Method
let arr = [1,2,3,4];
let res1 = arr.toString();
//console.log(res1);

// At() Method
let arrAt =  ["Apple", "Mango", "Banana"]; 
let res2 = arrAt.at(1);
let resu = arrAt.length;
//console.log(arrAt);
//console.log(resu);

//Join() Method
let arr1 = ["Apple", "Mango", "Banana"]; 
let res3 = arr1.join("*");
//console.log(res3);

// Pop() Method
let arr2 = ["Apple", "Mango", "Banana"]; 
//console.log(arr2);
let res4 = arr2.pop();
//console.log(res4);

//Push() Method
let arr3 =  ["Apple", "Mango", "Banana"]; 
// console.log(arr3);
let res5 = arr3.push("Graphes");
// console.log(arr3);
// console.log(res5);

// Shift() Method
let arr4 =  ["Apple", "Mango", "Banana"]; 
//console.log(arr4);
let res6 = arr4.shift();
//console.log(res6);

// Unshift() Method
let arr5 = ["Apple", "Mango", "Banana"];
//console.log(arr5);
let res7 = arr5.unshift("Kiwi");
//console.log(arr5);
//console.log(res7);

// Concat() Method
// let res8 = ["Apple", "Mango", "Banana"];
// let res9 = [1,2,3];
// let res10 = ["a","b","c"];
// console.log(res8);
// console.log(res9);
// let output = res8.concat(res9,res10);
// console.log(output);
// output.toString();

//copyWithin() Method
let res11 = ["Apple", "Mango", "Banana"];
let out = res11.copyWithin(2,0);
//console.log(out);

//flat() Method
let res12 = ["Apple","Mango","Kiwi",[1,2],[3,4]];
let res13 = res12.flat();
//console.log(res13);

//Splice() Method
let fruit = ["Apple", "Mango"];
let fruitRes = fruit.splice(2, 0, "kiwi");
console.log(fruitRes);