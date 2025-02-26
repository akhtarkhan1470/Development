//Array Methods
// 1 Map
// var arr=[1,2,3,4,5];
// var mapped= arr.map(e=> e+30);
// document.write(mapped);


// 2 Filter
// var arr =[1,2,3,4,5]
// var filtered= arr.filter(e=> e===3 || e===5);
// document.write(filtered);



// 3 Sort
// var arr=[1,2,3,4,5,6];
// var alphabet=["f","a","c","v","z"];
// decend= arr.sort((a,b)=> a>b ? -1:1);
// document.write(decend ,"<br>");

// ascending= alphabet.sort((a,b)=> a>b? 1:-1);
// document.write(ascending);


// 4 forEach()
// var arr=[1,2,3,4];
// arr.forEach(e=>
// {
//     document.write(e,"<br>");
// }
// );


// 5 Concat
// var arr1=["a","b","c"];
// var arr2=["d","e","f"];

// document.write(arr1.concat(arr2));



// 6 Every  => This method checks every element in the array that passes the condition, returning true or false as appropriate.
// var arr=[1,2,3,4,5,6,7];
// // all elements are greater  than 5
// var greaterfive= arr.every(num=> num>5);
// document.write(greaterfive, "<br>");

// // all elements are less than nine
// lessnine=arr.every(num=> num< 9);
// document.write(lessnine);



// 7 some  =>This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

// var arr=[1,2,3,4,5,6,7];
// //at least one elements are greater  than 5
//  var greaterfive= arr.some(num=> num>5);
// document.write(greaterfive, "<br>");

// // // at lest one elements is less than or eaual to zero
//  lessnum = arr.every(num=> num<=0);
// document.write(lessnum);
  

// 8 Includes This method checks if an array includes the element that passes the condition, returning true or false as appropriate.
//  var arr=[1,2,3,4,5,6];
//  document.write(arr.includes(2) , "<br>");
//  document.write(arr.includes(8));

 //9 Join  This method returns a new string by concatenating all of the array’s elements separated by the specified separator.
//   var arr=["A","K","H","T","A","R","K","H","A","N"];
//   document.write(arr.join(''));


//Push its add the items from end
// let foodItems =["potato", "Apple","Litchai","Tomato"];
// foodItems.push("Chips");
// document.write(foodItems);

//pop
// let foodItems =["potato", "Apple","Litchai","Tomato"];
// document.write(foodItems, "<br>");
// foodItems.pop();
// document.write(foodItems);

//To string
// let marks=[97,86,66,98,45];
// document.write(marks.toString());


//unshift
// let marks=[90,78,66,59,89];
// marks.unshift("85");
// document.write(marks);

//shift
// let marks=[90,78,66,59,89];
// marks.shift();
// document.write(marks);


//Slice
// let heroes=["ajay", "spiderman","shaktiman","amir khan","salman khan"];
// document.write(heroes.slice(1,4));

//splice
// let arr=[1,2,3,4,5,6,7];
// document.write(arr,"<br>");
// arr.splice(2,2,101,102);
// document.write(arr);


//practice  question
// let arr=["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// document.write(arr,"<br>");
// arr.shift();
// document.write(arr);

// let arr=["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// document.write(arr,"<br>");
// arr.splice(2,1,"OLA")
// document.write(arr);

let arr=["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
document.write(arr,"<br>");
arr.push("Amazon");
document.write(arr);

