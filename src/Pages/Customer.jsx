import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Customer = () => {
    const {name} = useContext(AuthContext)
    console.log(name)
    return (
        <div>
            This is coustomer
        </div>
    );
};

export default Customer;