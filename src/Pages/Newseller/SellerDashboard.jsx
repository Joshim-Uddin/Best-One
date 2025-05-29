import React from 'react';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
    return (
        <div>
            This is seller dashboard
            <Link to='/'>See Products</Link>
            <Link to='/addproduct'>Add Product</Link>
        </div>
    );
};

export default SellerDashboard;