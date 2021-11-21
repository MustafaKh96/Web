var v1 = 1; // global.
let l1 = 2; // lokal bzw. block.
const c1 = 3; // lokal bzw block und konstante.
console.log(v1,l1,c1);
{
    console.log(v1,l1,c1);
    var v2 = 11;
    let l2 = 22;
    const c2 = 33;
    console.log(v2,l2,c2);
}
console.log(v2);
//console.log(l2); FEHLER
//console.log(c2); FEHLER

var v3 = 111;
let l3 = 222;
const c3 = 333;
{
    {
        console.log(v3,l3,c3);
    }
}
//----------------------------
//wenn aber eine Variable in einer Funktion definiert ist 
//(egal ob mit var,let oder const), 
//dann ist sie außerhalb der Funktion NICHT mehr definiert.
function myFunction(){
    var v = 1;
    let l = 2;
    const c = 3;
}
//console.log(v); FEHLER
//console.log(l); FEHLER
//console.log(c); FEHLER