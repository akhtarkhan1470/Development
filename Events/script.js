// // let btn=document.querySelector('#btn1');
// // btn.onclick=function(){
// //      document.write('Hello World');
// //      let a=25;
// //      a++;
// //      document.write(a);
// // }


// let btn = document.querySelector("#btn1");
// btn.addEventListener("click" ,() =>{
//     console.log("Hello World - handler1");
// });
// btn.addEventListener("click" ,() =>{
//     console.log("Hello World-handler2");
// });
// btn.addEventListener("click" ,() =>{
//     console.log("Hello World-handler3");
// });

// const handler4 = () =>{
//     console.log("Hello World-handler4");
// };

// btn.removeEventListener("click" ,() =>{
//     console.log("Hello World-handler4");
// });


// let box=document.querySelector('div');
// box.onmouseover=function(){
// document.write('Hello World');
// }

//Mode of theme
let modebtn=document.querySelector('#mode');
let currentTheme='light';
modebtn.addEventListener('click',()=>{
if(currentTheme=='light'){
    currentTheme='dark';
    document.querySelector('body').style.backgroundColor='black';
}
    else
    { 
    currentTheme='light';
    document.querySelector('body').style.backgroundColor='white';XMLDocument
}
console.log(currentTheme);

});
 