function abc()
{
    var pickobt_mark=document.getElementById("obtain").value;
    var pictotal_marks= document.getElementById("Total").value;
    result=(pickobt_mark/ pictotal_marks) *100;
    alert(result);
    document.getElementById("ab").innerHTML= ("YOU HAVE GOT IT "+ result + "%");
    console.log(result);
    
}
