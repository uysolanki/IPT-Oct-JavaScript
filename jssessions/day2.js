let student1={
    rno:18,         //number as a value
    sname:'Virat',  //string as a value
    per:90,        //number as a value
    marklist:{
        hist:80,
        geog:90,
        sci:100
    },
    awards:["Best Speaker","Best Player"],  //Array/Object as a value
    displayHouseName : function houseName()
                        {
                            console.log("Red")
                        }
}
student1.displayHouseName();
console.log(typeof student1.displayHouseName)
student1.momname='Saroj'
delete student1.per

console.log(student1)
student1.rno=81;
console.log(student1)

const student2={
    rno:45,
    sname:'Rohit',
    per:88.5
}

console.log(student2)
student2.rno=54;
console.log(student2)

student2={
    rno:33,
    sname:'Hardik',
    per:98.5
}
console.log(student2)



