// let marks = [97 , 82 , 59 , 78 , 91];
// // document.write(marks);
// // document.write(marks[2]);
// document.write(marks[1]=85);
// console.log(marks);

// let heroes = ["Superman" , "Batman" , "ironman" , "Spiderman" , "Thor" , "Hulk" , "Captain America"];
// for(let i = 0; i < heroes.length; i++){
//     document.write(heroes[i] , "<br>");
// }


// let cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
//  for(let city of cities){
//     document.write(city , "<br>");
//  }


 //Example Question
//  let studentMarks =[85 , 97 , 44 , 37 , 76 ,60]
//  let sum =0;
//   for (let mark of studentMarks){
//       sum = sum + mark;
//   }
//   let avg = sum / studentMarks.length;
//   document.write( "Total Marks are =" ,sum , "<br>");
//   document.write("Average Marks is =" ,avg);
 

//Example Question
let items = [250 , 645 , 300 , 900 , 450];
 for ( let i=0; i<items.length; i++){
    let discount = items[i]/10;
    let price =items[i] - discount;
    document.write("Item price after Discount =" ,price , "<br>");

 }