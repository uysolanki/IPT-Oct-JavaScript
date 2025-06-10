import myproducts from './data.js'
import {batsmen,bowler,allrounder,areaCircle} from './data.js'
console.log(myproducts)

const electronicsProducts=myproducts.filter(
    (product)=>{
        return product.category==='electronics'
    }
)

console.log(electronicsProducts)
console.log(batsmen)

console.log(areaCircle(5));