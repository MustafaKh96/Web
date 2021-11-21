// Die reference bzw. komplexe Datentypen werden NICHT direkt auf dem Stack angelegt,
// sondern ein Reference auf dem Stack und das Objekt auf dem Heap 
// wird werden angelegt.
// und das Reference zeigt dann auf das Objekt im Heap.

// Es gibt "object & Function"
// Das Objekt kann aber Array, Object, User define, System-define

//Object:
// 1) Array:
var arr = [1,2,3];
// 2) Objekt:
var person = { vroname: "Musti",
nachname: "KH",
alter: 25
}

//Funktion:
function myfunction(a,b){
    return a + b;
}
console.log(typeof arr,typeof person, typeof myfunction);