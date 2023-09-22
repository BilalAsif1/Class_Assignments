//push ()
let arr_1 = [1, 2, 3];
arr_1.push(4);
console.log("\nArray after push(4) : ", arr_1);
//pop()
let arr_2 = [1, 2, 3];
arr_2.pop();
console.log("\nArray after pop() :", arr_2);
//shift()
let arr_3 = [1, 2, 3];
arr_3.shift();
console.log("\nArray after shift() : ", arr_3);
//unshift();
let arr_4 = [1, 2, 3];
arr_4.unshift(0);
console.log("\nArray after ushift(0) : ", arr_4);
//concat()
let arr_5 = ["a", "b"];
let arr_6 = ["c"];
let result_concat = arr_5.concat(arr_6);
console.log("\nResult after array concat : ", result_concat);
//join
let arr_7 = ["a", "b", "c"];
arr_7.join('-');
console.log(`\nResult after join('-') : `, arr_7);
//slice()
let arr_8 = ["a", "b", "c"];
console.log("\nArray after slice(1) : ", arr_8.slice(1));
//indexOf()
let arr_9 = ["a", "b", "c"];
console.log("\nindex of element(b) : ", arr_9.indexOf("b"));
//includes()
let arr_10 = ["a", "b", "c"];
console.log("\nResult of includes(c) : ", arr_10.includes("c"));
//find()
let arr_11 = [3, 5, 6, 8];
console.log("\nResult of find() : ", arr_11.find((n) => n % 2 === 0));
//findIndex()
let arr_12 = [2, 4, 3, 5];
console.log("\nResult of findIndex() : ", arr_12.findIndex((n) => n % 2 !== 0));
//map()
let arr_13 = [3, 4, 8, 6];
console.log("\nResult of map() : ", arr_13.map((n) => n * 2));
//filter()
let arr_14 = [1, 4, 7, 8];
console.log("\nResult of filter() : ", arr_14.filter((n) => n % 2 === 0));
//reduce()
let arr_15 = [2, 4, 3, 7];
console.log("\nResult of reduce() : ", arr_15.reduce((a, b) => a + b));
//every()
let arr_16 = [2, 3, 4, 5];
console.log("\nResult of every() : ", arr_16.every((x) => x < 6));
//some()
let arr_17 = [3, 5, 6, 8];
console.log("\nResult of some() : ", arr_17.some((x) => x > 6));
//reverse()
let arr_18 = [1, 2, 3, 4];
console.log("\nResult of reverse() : ", arr_18.reverse());
export {};
