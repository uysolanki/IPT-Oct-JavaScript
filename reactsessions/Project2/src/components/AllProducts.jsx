import React from 'react'
import allProducts from '../data/products.js'
const AllProducts = () => {

 console.log(allProducts)
  return (
    <div className='row gap-1 justify-content-evenly' >
        {allProducts.map(
            (product)=>{
                 return <div className="card col-3">
                 <img className="card-img-top" src={product.image} alt="Card image cap" height='500' width='80'/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
             </div>      
            }
        )}

    </div>
  )
}

export default AllProducts