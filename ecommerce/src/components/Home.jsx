import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className='container'>
            <div className="card bg-dark text-black border-0">
                <img src="assets/main/image1.jpg" className="card-img" alt="..." height='550px' />
                <div className="card-img-overlay d-flex flex-column justify-content">
                    <h1 className="card-title"><b1>Products </b1></h1>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                </div>
            </div>
            <Product />
        </div>
    )
}

export default Home