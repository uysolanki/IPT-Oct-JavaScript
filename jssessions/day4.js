let student1={
    rno:18,         //number as a value
    sname:'Virat',  //string as a value
    per:90,
    'per-my':98

}
let my=10;

console.log(student1['per-my']);


for(let key in student1)
    console.log(key)
