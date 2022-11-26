import { React, useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const ProductModal = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { auther, category_id, details, img, location, original_price, reseal_price, title, year_used } = product;
    // console.log(user, product)
    return (
        <div>
            <input type="checkbox" id="product_modal" className="modal-toggle" />
            <label htmlFor="product_modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </label>
            </label>
        </div>
    );
};

export default ProductModal;