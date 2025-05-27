let arr=[10,20,30]
let doubledArray=[]
for(let n of arr)
{
let doubledNumber=n*2
doubledArray.push(doubledNumber)
}
console.log(arr)
console.log(doubledArray)


let arr1=[12,24,36]


// let newArray=arr1.map(
//     (n)=>{
//         return n*2;
//     }
// )
// console.log(newArray)

// let newArray=arr1.map(
//     (n)=>(n*2)
// )
// console.log(newArray)


let newArray=arr1.map((n)=>n*2)
console.log(newArray)


let arr3=[1,2,3,4,5]
let oddNumberArray=arr3.filter(
    (n)=>{
        return n%2==1
    }
)

console.log(oddNumberArray)


let arr4=[10.5,11,20,21.5]
let resultArray=arr4.map(
    (n)=>{
        return n*2;
    }
)

let finalResult=resultArray.filter(
    (n)=>{
        return n%2==1
    }
)

console.log(finalResult)


let arr5=[11.5,11,20,22.5]

let arr6=arr5.map(
    (n)=>{
        return n*2 
    }
).filter(
    (n)=>{
        return n%2==1
    }
)

console.log(arr6)

let arr7=arr5.map((n)=> n*2 ).filter((n)=> n%2==1)
console.log(arr7)


let arr8=[10,21,30,41,45]
let sum=arr8.reduce((n,acc)=>n+acc)

console.log(sum)


let arr9=[10,21,30,41,45]
let ans=arr9.find(
    (n)=> n%2==1
)

console.log(ans)