import { React, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const ProductModal = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { img, reseal_price, title, phone_number } = product;
    // console.log(product)
    const { reset, handleSubmit } = useForm({ defaultValues: { user, product } });

    const handleConfirm = data => {
        console.log(data);
        fetch('http://localhost:5000/booking-products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // console.log(data);
                    toast.success('Successfully product booked')
                    // refetch();
                }
                else {
                    toast.error(data.message)
                }

            })
            .catch(error => console.error(error));

    }

    useEffect(() => {
        reset({ user, product })
    }, [reset, user, product])
    return (
        <div>
            <input type="checkbox" id="product_modal" className="modal-toggle" />
            <label htmlFor="product_modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold mb-5">{title}</h3>
                    <form onSubmit={handleSubmit(handleConfirm)} className="grid grid-cols-1 gap-5">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product title</span>
                            </label>
                            <input type="text" defaultValue={title} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="price" defaultValue={reseal_price} className="input input-bordered w-full" readOnly />
                        </div>
                        <input className="btn btn-outline btn-warning" type="submit" value="Confirm" />
                    </form>
                </label>
            </label>
        </div>
    );
};

export default ProductModal;