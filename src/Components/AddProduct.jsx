import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h3 className='text-center text-3xl font-semibold py-8 uppercase'>Add a Product</h3>
            <form action="">
                <label htmlFor="name">Product Name : </label>
                <input type="text" name='name' />
            </form>
        </div>
    );
};

export default AddProduct;