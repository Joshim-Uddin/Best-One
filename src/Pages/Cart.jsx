import React, { useEffect, useState } from 'react';
import { getCart } from '../fakedb';

const Cart = () => {
    const [cart, setCart]= useState([])
    useEffect(() => {
        const cartItems = getCart()
        setCart(cartItems)
    }, [])
    
    let items = 0;
    for(let x in cart){
             items += cart[x]        
    } 
    return (
        <div>
            {
               items
            }
        </div>
    );
};

export default Cart;