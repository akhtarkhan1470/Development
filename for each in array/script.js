// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     document.write(val,"<br>");
// })


// let arr1=["lahore","mailsi","Multan","Karachi"];
// arr1.forEach((val,idx)=>{
//     document.write(val.toUpperCase(),idx,"<br>");
// })


// let num=[prompt("Enter your number")];
// num.forEach((num)=>
// {
//     document.write(num*num);
// })


//even

// let arr=[1,2,3,4,5,6,7,8];
// let evenarr=arr.filter((val)=>
// {
//    return val % 2 === 0;
// });
// document.write(evenarr);


// let arr=[1,2,3,4,5];
// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// document.write(output);

// filter Array
// let arr=[80,110,225,75,90,93];
// let score= arr.filter((val)=>
// {
//     return val>90;
// });
// document.write(score);



//take a arry in result
let n= prompt("enter your number: ");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
document.write("The result of arry: ",arr,"<br>");

let sum=arr.reduce((res,curr)=>{
    return res+curr;
})
document.write("The Result of sum: ",sum,"<br>");

let factorial=arr.reduce((res,curr)=>{
    return res*curr;
})
document.write("Factorial :",factorial)