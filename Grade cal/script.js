let marks = prompt("Enter your marks: ");
let garde;
if (marks >=90  && marks <=100)
    {
    garde = 'A';
    }
else if(marks>=70 && marks<=89)
{
    garde = 'B';
}
else if(marks>=60 && marks<=69)
{
    garde='C';
}
else if(marks>=50 && marks<=59)
{
    garde  = 'D';
}
else if(marks>=0 && marks<=49)
{
    garde = 'F';
}
alert("according to your marks your grade is: "+garde);
document.write("according to your marks your grade is: "+garde);