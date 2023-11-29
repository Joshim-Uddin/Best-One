import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() =>{
        fetch('/products.json').then(res=>res.json()).then((data)=>{
            //To create a random number of index to shuffle the products randomly
            let randomProducts = []
            for(let j=0; j<data.length-1; j++){
                randomProducts.push(data[(Math.floor(Math.random() * data.length))])
            }
            let uniq = a => [...new Set(a)]; //function to generate unique productslist
            setProducts(uniq(randomProducts))
        });
    }, [])
    return products;
};
export default useProducts;