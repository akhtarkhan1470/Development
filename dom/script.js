// document.write("Helo");
// // alert("Helo"); 
// // let h2=document.querySelector("h2");
// // h2.innerText=h2.innerText+ ":From apna colleg";
// // console.log(h2.innerText)
// let divs=document.getElementsByClassName("box");
// // divs[0].innerText ="New Unique value 1";
// // divs[1].innerText ="New Unique value 2";
// // divs[2].innerText ="New Unique value 3";
// let idx=1;
// for(div of divs){
//     div.innerText=`new unique value ${idx}`;
//     idx++;
// }// 




let newbtn=document.createElement("button");
newbtn.innerHTML="Click me";

newbtn.style.color="white";
newbtn.style.backgroundColor="red";

document.querySelector("body").appendChild(newbtn);



//Q2

let para=document.querySelector("p");
// para.setAttribute("class","newclass");
para.classList.add("newclass");
