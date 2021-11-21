// Arrays:

//------------------------------
// Erstellen:
const arr1 = [1,2,3,4,5,6];
const arr2 = [1,true, "Hallo"];
const arr3 = new Array([1,2,3]);
const arr4 = [];
arr4[0] = 1;
arr4[1] = 2;
arr4[2] = 3;
//arr4[3] = arr4[4] = undefine.
arr4[5] = 3;

//------------------------------
// Check if is Array:
let check = Array.isArray(arr1); // true.

//------------------------------
// Get Array length:
let arr1_length = arr1.length; // 6

//------------------------------
// Indexing:
let element0 = arr1[0]; // element0 = 1.
let element1 = arr1.indexOf(2); // 1. Das erste Vorkommen von 2. 
// Wenn das Ergebins = -1 => Das Element ist NICHT in Array.
let element2 = arr1.lastIndexOf(2); // 1. Das letzte Vorkommen von 2.

//------------------------------
//Array Manipulation:
const arr5 = [1,2,3,4,5,6];

arr5.unshift(0); // add on to the beginning.
arr5.shift(); // add off from the beginning.

arr5.push(7); // add on to the end.
arr5.pop(); // take from the end.

// arr5.splice(4); // Ab Index 4 lösche.
// arr5.splice(1,3); // lösche von Index 1 zu Index 3.

// Schneide: (Ein neues Array definieren und die Elemente aus vorhandenen Array auswählen)
const arr_schneide = [1,2,3,4,5,6];
let arr_neu1 = arr_schneide.slice(2); // ab 2: [3,4,5,6]
let arr_neu2 = arr_schneide.slice(2,4); // von 2 zu 4: [3,4]

//------------------------------
// Concatination:
let arr6 = arr1.concat(arr5); // [1,2,3,4,5,6,1,2,3,4,5,6]

//------------------------------
// Umdrehen: reverse()
const arr7 = [1,2,3,4,5,6];
arr7.reverse(); // [6,5,4,3,2,1]

//------------------------------
// toString():
let s1 = arr7.toString();
let s2 = arr7.join("*"); // 6*5*4*3*2*1


console.log(f); // true