import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='flex gap-4 text-white mb-2'>
            <Link to="/newseller">
            <h5 className='capitalize'>Become a seller</h5>
            </Link>
            <Link to="/support"><h5 className='capitalize'>Help & Support</h5></Link>
        </div>
    );
};

export default Topbar;