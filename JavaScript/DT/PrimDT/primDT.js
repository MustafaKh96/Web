// Die primitiven Datentypen werden direkt auf dem Stack angelegt.

// String:
var s1 = "Hallo";
var s2 = 'Hallo';
// number:
var n1 = 1;
var n2 = 1.1;
// boolean:
var b1 = true;
var b2 = false;
//______________
// null:
var nu1 = null;
// undefine:
var undef;
// Symbol:
var sym1 = Symbol(0);

console.log(typeof s1, typeof n1, typeof b1, typeof nu1, typeof undef, typeof sym1);
console.log(s1, n1, b1, nu1, undef, sym1);