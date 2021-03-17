var myArray1 = ["Vali", "CFactory", "Vienna", "WIen"];
for (var tedi in myArray1) {
    console.log(tedi);
    //console.log("The index is: ", tedi);
    //declare var a = tedi;
}
for (var _i = 0, myArray1_1 = myArray1; _i < myArray1_1.length; _i++) {
    var index1 = myArray1_1[_i];
    console.log("The value is: ", index1);
}
console.log(tedi, index1);
for (var _a = 0, _b = Object.entries(myArray1); _a < _b.length; _a++) {
    var _c = _b[_a], index = _c[0], value = _c[1];
    console.log(index, value);
}
