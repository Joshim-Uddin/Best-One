import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

const Product = ({product}) => {
    const [openModal, setOpenModal] = useState('');
  const props = { openModal, setOpenModal };
    const {name, brand, price, image_url, specification, company, year_of_manufacture, model} = product;
    
    return (
        <><div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image_url} alt={`${name}'s image`} className="rounded-xl md:h-64 h-44" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className='w-full mx-auto flex justify-between items-center gap-10'><p>{brand}</p>
    <p>$ {price}</p></div>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={() => props.setOpenModal('pop-up')}>Details</button>
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
        </Modal.Body>
      </Modal>

</>
    );
};

export default Product;