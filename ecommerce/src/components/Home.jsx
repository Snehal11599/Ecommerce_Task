import React, { useEffect, useState } from 'react'
import Product from './Product'
import Data from '../Data'

import Review from './Review'

const Home = () => {


    const [item, setItems] = useState([])
    //const [loading, setLoading] = useState(false)

    useEffect(() => {
    //making function for getting products
    const getProducts = async () => {
    //setLoading(true)
       const response = await fetch(`https://fakestoreapi.com/products`)
     setItems(await response.json())
    //setLoading(false)
    }
    getProducts()
    }, [])


    //this function is if products are take time to display 
    // const Loading = () => {
    //     return (
    //         <>
    //             Loading.....
    //         </>
    //     )
    // }



    return (
        <>

            <div className='container'>
                <div className='row'>
                    {/* {loading ? <Loading/> : <ShowProduct/>} */}

                    {item.map((data) => {
                        return (
                            <>
                                <div className='col-md-6 py-5 ' key={data.id} style={{ border: "groove" }}>
                                    <img src={data.image} alt={data.title} height='400px' width='400px' />
                                </div >
                                <div className='col-md-6' style={{ border: "groove" }}>
                                    <h3 className='text-uppercase text-black-50'>{data.category}</h3>
                                    <h1 className='display-5'>{data.title}</h1>
                                    <p className='lead'>
                                        Rating {data.rating && data.rating.rate}                                        <i className='fa fa-star'></i>
                                    </p>
                                    <h3>Price:</h3>
                                    <h3 className='display-6 fw-bold my-4'>${data.price}</h3>
                                    <h4>Description:</h4>
                                    <p className='lead'>  {data.description}</p>
                                    <button className='btn btn-outline-dark' style={{ margin: "20px" }} >Buy Now</button>
                                    <Review  type="text"/>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            {/* <Product/>   */}
        </>
    )
}

export default Home