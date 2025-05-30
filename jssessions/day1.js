//           0      1    2      3      4
const arr=["Audi","BMW","Merc","Tata","Maruti"]

//slice - sub array  starting index , ending index+1  , copy paste
//       - OG array remains unaffected

const slicedCars=arr.slice(1,4);  
console.log(slicedCars)//["BMW","Merc","Tata"]
console.log(arr)       //["Audi","BMW","Merc","Tata","Maruti"]


//splice    - sub array  starting index , ending index+1  ,cut paste
const splicedCar=arr.splice(1,2)  //["BMW","Merc"]
console.log(splicedCar)
console.log(arr)                 //["Audi","Tata","Maruti"]

//different iteration 
//1. classical/traditional for loop
//2. for of      
//3. for in
//4. forEach()

const numbers=[10,20,30,40,50]
let sum=0;
for(let i=0;i<numbers.length;i++)
    sum+=numbers[i]

console.log(sum)

let sum1=0;
for(let n of numbers)
    sum1+=n
console.log(sum1)



