import React from 'react';

const MyOrder = ({ booking_product }) => {
    const { name, email, title, price, img } = booking_product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img className='min-h-[400px]' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">USED</div>
                    </h2>
                    <p >Price: <strong>${price}</strong></p>
                    <div className="card-actions justify-end mt-5">
                        <button className="btn btn-outline">Order Cancle</button>
                        <button className="btn btn-outline">Advertisement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;