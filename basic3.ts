var myArray1 = ["Vali","CFactory","Vienna","WIen"];

for(var tedi in myArray1)
{   
    declare var tedi;
    console.log(tedi)
    //console.log("The index is: ", tedi);
    //declare var a = tedi;
    
}

for(var index1 of myArray1)
    {
        console.log("The value is: ", index1);
        declare var index1;
        
    }
console.log(tedi, index1);

for (let [index, value] of Object.entries(myArray1)) 
{
    console.log(index, value);
    
}
