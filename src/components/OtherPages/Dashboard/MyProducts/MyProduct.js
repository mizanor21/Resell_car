import React from 'react';

const MyProduct = ({ myProduct }) => {
    const { auther,
        phoneNumber,
        title,
        img,
        details,
        location,
        original_price,
        reseal_price,
        year_used, } = myProduct;
    console.log(myProduct);
    return (
        <div>
            <div className="mx-8 my-5">
                <div className='flex justify-between items-center'>
                    <div className="flex items-center">
                        <h3 className='text-xl font-bold mr-2'>{auther}</h3>
                        {/* <img className='w-5 h-5' src={verified_icon} alt="img not found!" /> */}
                    </div>
                    <div className="rating">
                        <input type="radio" name="" className="mask mask-heart bg-gray-200 border-2" />
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
                        <button className="btn btn-outline btn-warning">Delete</button>
                        <button className="btn btn-outline btn-warning">Advertisement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;