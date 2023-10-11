const addToDb = id=>{
    let cart = getCart()
    const quantity = cart[id]
    if(!quantity){
        cart[id] = 1;
    }else{
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

const removeFromCart = id=>{
    const cart = getCart()
    if(id in cart){
        delete cart[id]
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

const getCart = () => {
    let cart = {}

    const storedCart = localStorage.getItem('cart')
    if (storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}
const deleteCart = () => {
    localStorage.removeItem('cart')
}

export { addToDb, removeFromCart, getCart, deleteCart }