const student ={
    name:"Akhtar",
    age: 21,
    cgpa: 3.5,
    isPassed: true

};
student.age=student.age+1;
// student["age"]=student["age"]+1;
document.write(student.name + "<br>");
document.write(student["isPassed"]);
document.write(student.age);