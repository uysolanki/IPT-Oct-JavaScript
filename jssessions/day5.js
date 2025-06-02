function greet()
{
    console.log("Hi")
}

let a=10;
let b=10.5;
let c={}
let d=[]
let e=true;
console.log(typeof greet)

function area(length,breadth)
{
    return length*breadth
}




const result=area(10,5);
console.log(result)


let rectangleArea=(length,breadth)=>
{
    return length*breadth
}

const result1=rectangleArea(12,6);
console.log(result1)


let rectangleArea1=(length,breadth)=>length*breadth
console.log(rectangleArea1(13,8))


let circleArea=radius=>Math.PI*radius*radius;
console.log(circleArea(10)*1)


function sum(a,b,callback)
{
    const result=a+b;
    callback(result)
}

function displayResult(value)
{
    console.log(`The Result is ${value}`)
}


sum(100,200,displayResult)
console.log(typeof 100)
console.log(typeof 200)
console.log(typeof displayResult)

setTimeout(()=>{
    console.log("Welcome to ITP")
},5000)


setInterval(()=>{
    console.log("Welcome to ITP")
},5000)