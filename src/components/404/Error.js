import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo/errorImg.jpg';

const Error = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <img className='w-1/2' src={logo1} alt="404! not fount!" />
            <p>Page not found! <Link to={'/'} className='btn btn-link' >go back home</Link></p>
        </div>
    );
};

export default Error;