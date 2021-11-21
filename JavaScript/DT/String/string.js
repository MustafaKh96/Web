// String:

//-----------------------------------
// Erstellen:
let a = "Hallo";
    a = 'Hallo';
    a = new String("Hallo");
//-----------------------------------
//length:
let b = a.length; // 5
//-----------------------------------
// "" & '' & \:
let c = "Hallo 'Welt'";
    c = 'Hallo "Welt"';
    c = 'Hallo \\Welt\\';
//-----------------------------------
// \n:
let d = "Hallo\nWelt";
//-----------------------------------
// Concatination: 
// 1) str1 + str2 
// 2) str1.concat(str2) 
let e1 = "Hallo";
let e2 = e1 + " Welt"; //(1)
    e2 = e1.concat(" Welt"); //(2)
    e2 = e1.concat(' ',"Welt");
//-----------------------------------
// Indexing:
let f = a[2]; // l
    f = a.charAt(0); // H
    f = a.indexOf("l"); // 2
    f = a.lastIndexOf("l"); // 3
// substring: Nimmt NUR positive Zahlen.
// substring(ab):
// substring(von, bis) bis ist NICHT mit dabei
let g1 = a.substring(1); //allo
    g1 = a.substring(2,4); // ll
// slice(ab): Nimmt positive Zahlen und negative Zahlen.
// slice(von,bis):
let g2 = a.slice(1); // allo
    g2 = a.slice(2,4); // ll
    g2 = a.slice(-4); //allo
    g2 = a.slice(-4, -2); //al
//-----------------------------------
// Case_Manipulation:
let g = a.toUpperCase(); //HALLO
    g = a.toLowerCase(); //hallo
//-----------------------------------
// Wort_Manipulation
// replace: umwandeln
let text = "Hallo Welt ! ! !";
let h1 = text.replace("Welt","David"); // => Hallo David ! ! !
// trim(): entferne alle Leerzeichen am Anfang und Ende:
// trimStart(): entferne alle Leerzeichen am Anfang.
// trimEnd(): entferne alle Leerzeichen am Ende.
let text1 = "      Hallo Welt!  ";
let h2 = text1.trim();
//-----------------------------------
// Spliting():
let text2 = "Hallo Welt ! ! !";
let i = text.split(" ");
//-----------------------------------
// includes(): enhält?
let j = text2.includes("Hallo"); // true
    j = text2.includes("David"); // false