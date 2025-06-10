//console.log("Hello World")
const cars=["Audi","BMW","Maruti","Tata","Merc"];
let slicedArray=cars.slice(0,3)  //start index ,end index +1
console.log(slicedArray)  //[Audi,BMW,Maruti]
console.log(cars)  //OG array will not be impacted [Audi,BMW,Maruti,Tata,Merc]


const removedCars=cars.splice(2,2) // start index, length
console.log(removedCars); //[Maruti,Tata]
console.log(cars);      // OG array will be impacted [Audi,BMW,Merc]


const age=19;
const name="Alice";
const height=5.6;

console.log("My name is ", name , " My age is ", age, " My height is ", height ," feet")
//template literal `
console.log(`My name is  ${name } My age is ${age} My height is ${height} feet`)


const cars1=["Audi","BMW","Maruti","Tata","Merc"];
[a,b,...c]=cars1;
console.log(a)
console.log(b)
console.log(c)

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
