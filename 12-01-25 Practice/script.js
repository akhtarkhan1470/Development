// comparison of logical operators
// && is used to check if both the conditions are true
// || is used to check if any one of the conditions is true
// ! == not operator is used to check if the condition is false then it will return true


// let abc = prompt("Enter your name");
// if (abc === "Ali")
// {
//     alert(abc);
//     document.write(" he is :" , abc);
// }
// else if (abc === "Ahmed")
// {
//     alert("its Ahmed");
// }
// else
// {
//     alert("its wrong name");
//     document.write("its wrong name");
// }



// let abc = prompt("Enter your name");
// let age = prompt("Enter your age");
// if (abc === "Ali" && age === "20")
// {
//     alert(abc);
//     document.write(" he is :" , abc);
// }
// else if (abc === "Ahmed" || age === "17")
// {
//     alert("its Ahmed");
//     document.write("its Ahmed");
// }
// else
// {
//     alert("its wrong name");
//     document.write("its wrong name");
// }


let abc = prompt("Enter your name");
let age = prompt("Enter your age");
if (abc !== "Ali" && age === "20")
{
    alert(abc);
    document.write(" he is :" , abc);
}
else if (abc === "Ahmed" || age === "17")
{
    alert("its Ahmed");
    document.write("its Ahmed");
}
else
{
    alert("its wrong name");
    document.write("its wrong name");
}
