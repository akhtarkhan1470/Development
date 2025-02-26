//print 1 to 5
// let i;
// for(i=0; i<=5; i++)
// {
//     document.write("Hello World <br>");
// }



// print to add numbres
// let sum=0;
// for(i=0; i<=5; i++)
// {
// sum=sum+i;
// }
// document.write("sum = ", sum, "<br>");
// document.write("loop end" , );


// print to add n numbers

// let sum=0;
// let n=6;
// for(i=0; i<=n; i++)
// {
// sum=sum+i;
// }
// document.write("sum = ", sum, "<br>");
// document.write("loop end" , );



//print to add n numbers with prompt value

// let sum=0;
// let n=prompt("Enter the value of n"); 
// for(i=0; i<=n; i++)
// {
// sum=sum+i;
// }
// document.write("sum = ", sum, "<br>");
// document.write("loop end" , );



//While loop
// let i=1;
// while(i<=5)
//     {
//     document.write("i = ", i, "<br>");  
//     i++;
//     }


//Do while loop
// let i=20;
// do{
//     document.write("Hello World <br>");
//     i++;
// } while(i<=10);



// let i=1;
// do{
//     document.write("i = ", i, "<br>");
//     i++;
// } while(i<=5);

// for-of loop

// let str="HelloWorld";
// let size=0;
// for(let i of str)
// {
//     document.write("i =", i , "<br>");
//     size++;
// }
// document.write("size = ", size, "<br>");


//for-in loop
// let student={
//     name: "Akhtar",
//     age: 28,
//     cgpa: 3.5,
//     isPassed: true
// };
// for(let i in student)
// {
//     document.write("i = " ,i, "value=", student[i], "<br>");
// }


//Example Questions
// for(let i=0; i<=100; i++){
//     document.write(i, "<br>");
// }


//Print even numbers from 0 to 100
// let i=0;
// for(i=0;i<=100; i++)
// {
//     if(i%2==0)
//     {
//         document.write("even number = ", i, "<br>");
//     }
// }



//Game question
let gameNumber=26;
let userNumber= prompt("Enter your Guess Game number : ");
while(userNumber!= gameNumber)
{
 userNumber=prompt("Your guess is wrong. Enter your guess again : ");
}
document.write("Congratulation you win the game");
