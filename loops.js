//Classical For loop
var numbers1=[10,20,30,40,50]
let sum=0;
for(let i=0;i<numbers1.length;i++)
{
    sum+=numbers1[i];
}
console.log(sum)

//For of loop - group/collection of Data
var numbers1=[11,20,30,40,50]
let sum1=0;
for(let n of numbers1)
{
sum1+=n;
if(sum1>=100)
    break;
}
console.log(sum1)

//For in loop - traverse an object
let player={
    pno:18,   //number as a value
    pname:'Virat',  //string as a value
    rs:90,  //number as a value
    mp:2
}

console.log(player)

for(let key in player)
{
   // console.log(key + player[key])
    console.log(`${key} : ${player[key]}`)
}


const cars=['Audi','BMW','Merc'];
for(let car of cars)
{
    console.log(`I drive ${car}`)
    if(car==='BMW')
        break
}


cars.forEach(
    (car)=>{
        if(car==='BMW')
            return
        console.log(`I own ${car}`)
    }
)