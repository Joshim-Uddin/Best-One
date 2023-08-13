import React, { useEffect, useState } from 'react';
import Product from './Product';
import useProducts from '../../Hooks/useProducts';
import { Link } from 'react-router-dom';

const Products = () => {
   const products = useProducts()  //custom hooks for reuse prouducts
    return (
        <>
        <h2 className='text-center md:text-4xl text-2xl font-bold text-white'>Our Products</h2>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-4 w-11/12 mx-auto my-10 py-10'>
            {products.slice(0,12).map(product =><Product key={product.id} product={product}></Product>)}
            
        </div>
        <Link to='allproducts'><button className="btn btn-primary my-8 w-36 mx-auto flex">See All</button></Link>
        </>
    );
};

export default Products;