import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from '../Home/Product';


const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    const [filterText, setFilterText] = useState([])
    const handleChange = (e)=>{
        const value = e.target.value;
        setFilterText(value)
    }
    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then((data)=> setAllProducts(data));
    }, []) 
  const filtered =  allProducts.filter(product=>(product.type).match(filterText))
    return (
        <>
        <h2 className='text-center md:text-4xl text-2xl font-bold text-indigo-600 md:mt-20 mt-5'>All Products</h2>
        <div className='w-11/12 mx-auto flex items-center justify-end py-4'><input type="text" name='text' placeholder='Search by category' className='rounded px-3 py-2 focus:outline-none' onChange={handleChange} /></div>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-4 w-11/12 mx-auto my-10 py-10'>
            {filtered?.map(product =><Product key={product.id} product={product}></Product>)}
            
        </div>
        </>
    );
};

export default AllProducts;