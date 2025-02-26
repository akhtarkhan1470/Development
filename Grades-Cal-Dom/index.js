function cal()
{
let pick_chemistry = document.getElementById('Chemistry').value;
let pick_physics = document.getElementById('Physics').value;
let pick_math = document.getElementById('Maths').value;
let pick_english = document.getElementById('English').value;
let pick_computer = document.getElementById('Computer').value;
let total = Number(pick_chemistry) + Number(pick_physics) + Number(pick_math) + Number(pick_english) + Number(pick_computer);
alert (total);
let garde;
let percentage = (total/500) * 100;
alert(percentage);
if (percentage >=90  && percentage <=100)
    {
    garde = 'A';
    }
else if(percentage >=70 && percentage<=89)
{
    garde = 'B';
}
else if(percentage>=60 && percentage<=69)
{
    garde='C';
}
else if(percentage>=50 && percentage<=59)
{
    garde  = 'D';
}
else if(percentage>=0 && percentage<=49)
{
    garde = 'F';
}
 alert("according to your marks your grade is: "+garde);
 document.getElementById("cd").innerHTML = "Your percentage is: "+percentage;
 document.getElementById("ef").innerHTML = "Your total marks is: "+total;
 document.getElementById("ab").innerHTML = "Your grade is: "+garde;
 

}
