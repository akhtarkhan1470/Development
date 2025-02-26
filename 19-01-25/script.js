function abc(){
    console.log('Hello World');
}
abc();
const a= function abc(){
    console.log('Lahore');
}
a();
  
const b= ()=>{
    console.log("Akhtar");
}
b();

// parameters
var a1=55;
var a2=88;
const a3=()=>{
    console.log(a1+a2);
}
a3();



// Arguments
const c=(a1,b)=>{
    console.log(a1+b);
}
c("22", "33");
c(22,3344);



// Array 
var Person = ["Akhtar" , 27 , "Computer Science"];
console.log(Person);
 


// Destructuring
var person1 = ["junaid" , 28, "Software Engineer"];
var [name, age , qualification] = person1;
console.log(person1);
console.log(name);
console.log(age);
console.log(qualification);

// 2 DIMENSIONAL ARRAY / Multidimensional Array

var peron2 = ["Ali" , 29 , [0,1,2,3], "Software"];
console.log(peron2[2]);
// console.log(peron2);

