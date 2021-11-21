//Number:

//-------------------------------------
// Number Moglichkeiten
let a = 2; // 2.
    a = 3.3; // 3.3.
    a = 2e5; //2_00_000.
    a = 2e-5; //0.00002.
    a = new Number(123); // Als Objekt.
    a = Number.MAX_VALUE; // usw.
    a = Number.NaN; // Not a Number :)
//-------------------------------------
// Infinity: unendlich & -Infinity: minus unendlich
let b = 2/0; // Infinity
    b = -2/0; // -Infinity
//-------------------------------------
// isNaN(): Is Not a Number?
let c = 3; // flase
    c = "A"; // true
//-------------------------------------
// Math_Objekt:
let m1 = Math.PI;

let m2 = Math.round(3.4); // 3
    m2 = Math.round(3.5); // 4 
    m2 = Math.round(3.6); // 6
    m2 = Math.ceil(3.1);  // 4
    m2 = Math.floor(3.9); // 3 

let m3 = Math.sqrt(9);  // 3
    m3 = Math.abs(-8);  // 8
    m3 = Math.pow(2,2); // 4

let m4 = Math.min(1,2,3,4); //1
    m4 = Math.max(1,2,3,4); //4

let m5 = Math.random(); // von 0 zu 1
    m5 = Math.random() + 5; // von 5 zu 6
    m5 = Math.random() * 5; // von 0 zu 4
    m5 = Math.random() * 5 + 1; // von 1 zu 5
    m5 = Math.random() * 5 + 2; // von 2 zu 5
    m5 = Math.floor(Math.random()* 5 + 1); // von 1 zu 5