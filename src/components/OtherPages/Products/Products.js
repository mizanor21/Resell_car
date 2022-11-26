import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from './Product';
import ProductModal from './ProductModal/ProductModal';
import './Products.css'

const Products = () => {
    const products = useLoaderData({});
    const [product, setProduct] = useState({});
    console.log(product);
    return (
        <div className=''>
            <div className="flex justify-center items-center products">
                <div className="text-white py-28">
                    <h1 className='text-5xl font-bold'>Products</h1>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li>
                                <Link to={'/'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                    {
                        products.map(product => <Product key={product._id} product={product} setProduct={setProduct}></Product>)
                    }
                </div>
            </div>
            <ProductModal product={product}></ProductModal>
        </div>
    );
};

export default Products;