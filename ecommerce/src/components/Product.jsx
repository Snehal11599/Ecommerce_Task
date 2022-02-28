import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
    return (
        <>
            <div className='card my-4 py-4'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="/assets/product/img1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h2>Tester</h2>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to='' className='btn btn-primary'>Add to cart</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="/assets/product/img2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h2>MCB</h2>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to='' className='btn btn-primary'>Add to cart</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product