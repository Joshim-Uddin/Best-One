import React from 'react';

const Product = ({product}) => {
    const {name, brand, price, image_url} = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image_url} alt={`${name}'s image`} className="rounded-xl md:h-64 h-44" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className='w-full mx-auto flex justify-between items-center gap-10'><p>{brand}</p>
    <p>$ {price}</p></div>
    <div className="card-actions">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    );
};

export default Product;