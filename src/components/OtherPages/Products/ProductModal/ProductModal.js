import { React, useContext } from 'react';
// import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const ProductModal = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { img, reseal_price, title, phone_number } = product;
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.reseal_price.value;
        const img = form.image.value;
        form.reset();

        const booking = {
            displayName: name,
            email,
            title,
            price,
            img
        }

        fetch('http://localhost:5000/booking_products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // console.log(data);
                    toast.success('Successfully booked!')
                    // refetch();
                }
                else {
                    toast.error(data.message)
                }

            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <input type="checkbox" id="product_modal" className="modal-toggle" />
            <label htmlFor="product_modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold mb-5">{title}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 my-5'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder='Full name' className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder='email' className="input input-bordered w-full" />
                        <input name='title' defaultValue={title} type="text" className="input input-bordered w-full" disabled />
                        <input name='reseal_price' defaultValue={reseal_price} type="text" className="input input-bordered w-full" disabled />
                        <input name='image' defaultValue={img} type="text" className="input input-bordered w-full hidden" disabled />
                        <input type="submit" placeholder='' className='btn btn-accent' value="Submit" />
                    </form>
                </label>
            </label>
        </div>
    );
};

export default ProductModal;