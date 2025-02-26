// function functionName(){
//     document.write("Hello word","<br>");
//     document.write("My Name is Muhammad Akhtar","<br>");
// }
// functionName();



// function information(msg){ // Function Definition k andr ->Parameters -> Input
//     document.write(msg);  
// }
// information("Helo my Name is Muhammad Akhtar"); // Arguments


// function sum(){
//     a=5;
//     b=7;
//     s=a+b;
//     document.write(s);
// }
// sum();



// function add(){
//     a=+(prompt("Enter your number"));
//     b=+(prompt("Enter your number"));
//     sum=a+b;
//     document.write(sum);
// }
// add();


// function sum(a,b){
//     document.write(a+b);
// }
// sum(3,4);


// function sum(a,b){
//     sum=a+b;
//     return sum;
// }
// let value=sum(3,4);
// document.write(value); 



//vowels
// function countVowels(str){
//     let count=0;
//     for(const char of str){
//      if(char === "a" || char === "e" || char==="i" || char === "o" || char === "u"){
//         count++;
//      }
//     }
//     // document.write(count);
//     console.log(count);
// }

let countVow =(str)=>{
    let count=0;
    for(const char of str){
     if(char === "a" || char === "e" || char==="i" || char === "o" || char === "u"){
        count++;
     }
    }
    // document.write(count);
    console.log(count);

}