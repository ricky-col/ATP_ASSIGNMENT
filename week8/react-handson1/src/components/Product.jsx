import React from 'react'
import { useLocation } from 'react-router'

function Product() {
    const { state } = useLocation()
    console.log(state?.products)
    return (
        <div className='flex flex-col sm:flex-row justify-center p-2 bg-white'>
            {/* <img src={state?.products.image} alt="" />
        <p>{state?.products.title}</p>
        <p>{state?.products.price}</p>
        <p>{state?.products.description}</p> */}
            <div className='w-2/5'>
                <img src={state?.products.image} className="w-full mt-10 ml-5" alt="" srcset="" /></div>
            <div className='w-3/5 p-10 sm:p-10'>
                <p className='text-4xl mb-10'>{state?.products.title}</p>

                <p className=' mb-10'>Description:<br></br>{state?.products.description}</p>
                <p className=' mb-10'>Category:<br></br>{state?.products.category}</p>
                <p className='text-4xl mb-10'>{state?.products.price}</p>
                <button className='bg-blue-500 p-2 rounded-xl ml-10 text-white cursor-pointer' >add to cart</button>


            </div>

        </div>
    )
}

export default Product