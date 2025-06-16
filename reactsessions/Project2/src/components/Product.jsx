import React from 'react'
import product from '../data/product'
const Product = () => {
    console.log(product)
  return (
    <div>
        
        {/* <h1>{product.id}</h1>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <img src={product.image}></img> */}
        <div className="card col-4">
        <img className="card-img-top" src={product.image} alt="Card image cap" height='500' width='80'/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        
</div>
  )
}

export default Product