/*const Names = {
    "fName": "string",
     "lName":"string" }
var a = Names.fName= "Vali";
var b = Names.lName ="Jashari";
console.log(a,b);
document.write("Full name is: ", a," ", b);

*/
//EXERCISE 2
// Method 2:
/*
const Names1 = {
    "fName": "Vali",
     "lName":"Jashari" }
const{fName, lName} = Names1
console.log(fName,lName);
document.write("Full name is: ", fName," ", lName);
*/
//Method 3
let fName = "Vali", let lName="Jashari"
console.log("The full name is: ", fName, " ", lName);
var nameArray = [{
    fName: "Vali",
     lName:"Jashari" },
     {
        fName: "Vali",
         lName:"Jashari" },
         {
            fName: "Vali",
             lName:"Jashari" },
             {
                fName: "Vali",
                 lName:"Jashari" },
                 {
                    fName: "Vali",
                     lName:"Jashari" },
                     {
                        fName: "Vali",
                         lName:"Jashari" },
                         {
                            fName: "Vali",
                             lName:"Jashari" },
                             {
                                fName: "Vali",
                                 lName:"Jashari" },
                                 {
                                    fName: "Vali",
                                     lName:"Jashari" },
                                     {
                                        fName: "Vali",
                                         lName:"Jashari" }
                                 

                ];

nameArray.forEach(function(val){
    console.log(val.fName);
})

nameArray.forEach(function(vali1)
    {
        setTimeout(() => console.log(vali1.lName), 5000);
        console.log(vali1.lName);

        
    });

  