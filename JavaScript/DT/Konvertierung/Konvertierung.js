// from X to String: (String(X) or (X).toString())
var v1;
v1 = String(1); //"1"
v1 = String(true); //"true"
v1 = String([1,2,3]); // "1,2,3"

v1 = (1).toString(); //"1"
v1 = (true).toString(); //"true"
console.log(v1);

// from X to Number: (Number(X) or parseInt(X) or parseFloat(X) or +)
var v2;
v2 = Number("1"); //1
v2 = Number("");  //0
v2 = Number("   "); //0
v2 = Number("Hallo"); // NaN => Not a Number.
v2 = Number(true);  //1
v2 = Number(false); //0
v2 = Number([1,2,3]); // NaN => Not a Number.

v2 = parseInt("11.11"); // Erg: 11
v2 = parseFloat("11.11"); // Erg: 11.11

v2 = + "1"; //1
v2 = + "  "; //0
v2 = + true; //1
v2 = + "Hallo"; //NaN
console.log(v2);

// from X to boolean: (Boolean(X))
var v3;
v3 = Boolean(0); // false
v3 = Boolean(13); // true
v3 = Boolean(""); // false
v3 = Boolean(" "); // true
v3 = Boolean("Hallo"); // true
v3 = Boolean([]); // true
v3 = Boolean([1,2,3]); // true
console.log(v3);