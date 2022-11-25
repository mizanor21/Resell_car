import React from 'react';

const Product = ({ product }) => {
    const { auther, category_id, details, img, location, original_price, reseal_price, title, year_used } = product;
    return (
        <div className=''>
            <img src={img} alt="" />
            <h3>{title}</h3>
        </div>
    );
};

export default Product;