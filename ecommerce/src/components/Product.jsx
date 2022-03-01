
import React, { useState } from 'react'
import Home from './Home'
import Data from '../Data.json'

const Product = () => {
    return (
        <>
            <div className='container py-4 d-flex justify-content-center'>
                <button type="button" className="btn btn-outline-primary me-3">Description</button>
                <button type="button" className="btn btn-outline-primary me-3">Specification</button>
                <button type="button" className="btn btn-outline-primary me-3">Review</button>
            </div>
            {/* <Home products={products} /> */}
            {Data.map((product) => {
                return (
                    <>
                        <div className="col-md-3 ">
                            <div className="card h-100 text-center p-4" key={product.id} >

                                <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                    <p className="card-text">{product.category}</p>
                                    <a href="#" className="btn btn-outline-primary">Add to cart</a>
                                    <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Product