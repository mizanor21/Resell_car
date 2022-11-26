import React from 'react';
import verified_icon from '../../../assets/verify_logo/verified.png'

const Product = ({ product }) => {
    const { auther, category_id, details, img, location, original_price, reseal_price, title, year_used } = product;
    return (
        <div className='border-2 rounded-2xl'>
            <div className="mx-8 my-5">
                <div className='flex justify-between items-center'>
                    <div className="flex items-center">
                        <h3 className='text-xl font-bold mr-2'>{auther}</h3>
                        <img className='w-5 h-5' src={verified_icon} alt="img not found!" />
                    </div>
                    <div className="rating">
                        <input type="radio" name="" className="mask mask-heart bg-red-400" />
                    </div>
                </div>
                <p>Post on 26 Nov 2022, {location}</p>
            </div>
            <hr />
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='max-w-[400px]' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">USED</div>
                    </h2>
                    <h3 className='text-xl '><del> ${original_price}</del> <strong>${reseal_price} <small className='text-gray-500 text-xs'>Negotiable
                    </small></strong></h3>
                    <p className='text-lg font-bold'>Used time: {year_used}y</p>
                    <div className="my-5">
                        <h3 className='font-bold '>Description</h3>
                        <p>{details}</p>
                    </div>
                    <hr />
                    <div className="card-actions justify-end mt-5">
                        <button className="btn btn-outline btn-warning">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;