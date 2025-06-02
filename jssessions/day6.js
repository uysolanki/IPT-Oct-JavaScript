const cars=["Audi","BMW","Kia","Merc","Maruti","Mahindra"]

//classical for loop
for(let i=0;i<cars.length;i++)
{
    console.log(`My ${i+1} Car is ${cars[i]}`)
    if(i==1)
        break;
}

cars.forEach(
    (car,index)=>
    {
        if(index===1)
            return
       console.log(`My ${index+1} 4 Wheeler is ${car}`)
    }
)


const IndiaMfgs=cars.map(
    (car)=>
    {
        return car + " India";
    }
)

console.log(IndiaMfgs)


const Cars4CharNames=cars.filter(
    (car)=>(car.length>=4)
)


console.log(Cars4CharNames)


const singleCar=cars.find(
    (car)=>(car.length>4)
)

console.log(singleCar)