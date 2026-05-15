import React from 'react'
import { useEffect,useState } from 'react'
import {useNavigate} from 'react-router'
import { useForm } from 'react-hook-form'


function ProductList() {
    let [products,SetProducts] = useState([]);
    let [loading,Setloading] = useState(false);
    let [error,SetError] = useState(null);
    let [updatedProd,setUpdatedProd] = useState([]);
    let { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    //navigation to product component
    const gotoProduct = (productobj)=>{
        //navigation logic
        //while navigatingmtransfer product obj too
        navigate("/produc",{state:{products:productobj}})

    }
    useEffect(()=>{
        async function getProducts(){
            Setloading(true)
            try{
            let res = await fetch("https://fakestoreapi.com/products")
            if(res.status===200)
            {
                let product = await res.json()
                SetProducts(product)
                setUpdatedProd(product)
            }
            else{
                throw new Error("failed to fetch products")

            }}
            catch(error){
                SetError(error)
            }
            finally{
                Setloading(false)
            }
        }
        getProducts()
        
    },[]);
    
    if(loading===true)
    {
        return <p className='text-center text-2xl text-blue-400'>Loading......</p>

    }
    if(error!==null)
    {
        return <p className='text-center text-2xl text-red-400'>Error:{error.message}</p>
    }
    
    const searchHandler = (data) =>{
        if(data.search!=="")
        {
            let k = products.filter((prodobj)=>prodobj.category === data.search)
            setUpdatedProd(k)
        }
        else
        {
            setUpdatedProd(products)
        }
    }
    return ( 
        <div>
            <div>
        <form className='flex justify-center' onSubmit={handleSubmit(searchHandler)}>
        <input {...register("search")} className='p-2 bg-white rounded-xl' type="text" placeholder="search"/>
        <button  className='p-2 bg-blue-500 rounded-xl'>Search</button>
        </form>
        </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-12 cursor-pointer">
        {updatedProd.map((productobj => 
        <div onClick={()=>gotoProduct(productobj)}className=' shadow-xl bg-white rounded-xl' key={productobj.id}>
            <img src={productobj.image} alt="" className="h-44  object-contain  mx-auto p-2" />
            <p className='text-center text-m p-2 font-bold'>{productobj.title}</p>            </div>))}
        </div>

        </div>
        
       
        
    )
}

export default ProductList