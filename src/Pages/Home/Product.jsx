import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { addToDb } from '../../fakedb';

const Product = ({product}) => {
    const [cart, setCart] = useState([])
   let itemsArray = []
    const [openModal, setOpenModal] = useState('');
  const props = { openModal, setOpenModal };
    const {name, brand, price, image_url, specification, company, year_of_manufacture, model} = product;

    const handleAddToCart = (id) => {
       addToDb(id)
        
    }
    
    return (
        <><div className="card w-full bg-base-100 shadow-xl p-2">
  <figure className="px-0">
    <img src={image_url} alt={`${name}'s image`} className="rounded-xl md:h-52 h-44" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-lg px-0">{name}</h2>
    <div className='w-full mx-auto flex justify-between items-center gap-10 mb-8'>
      <p>{brand}</p>
    <p>$ {price}</p>
    </div>
    <div className="card-actions absolute bottom-2 mt-6">
      <button className="btn bg-[#7C3AED] text-white" onClick={() => props.setOpenModal('pop-up')}>Details</button>
    </div>
  </div>
</div>

<Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-black dark:text-gray-400">
             {name}
            </h3>
            <img src={image_url} alt="" className='w-32 h-44 mx-auto' />
            <div className="flex justify-center gap-4">
             <p>{specification}</p>
            </div>
            <div className='flex justify-between'>
            <p>Brand : {brand}</p>
             <p>Model: {model}</p>
             
            </div>
            <div>
                <p>Company: {company}</p>
                <p>Year Of Manufacture: {year_of_manufacture}</p>
                </div>
          </div>
          <div className='flex flex-col items-center justify-center mt-5 mb-2'>
          <button className="btn btn-primary" onClick={()=>handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        </Modal.Body>
      </Modal>

</>
    );
};

export default Product;