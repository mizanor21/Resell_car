import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value
        const img = form.image.value;
        const details = form.details.value;
        const location = form.location.value;
        const original_price = form.original_price.value;
        const reseal_price = form.reseal_price.value;
        const year_used = form.year_used.value;
        form.reset();

        const addProduct = {
            auther: name,
            email,
            phoneNumber,
            img,
            details,
            location,
            category_id: title,
            original_price,
            reseal_price,
            year_used,
        }
        console.log(addProduct)
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // console.log(data);
                    toast.success('Successfully product added!')
                    // refetch();
                }
                else {
                    toast.error(data.message)
                }

            })
            .catch(error => console.error(error));
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <fieldset className='border-2 rounded-lg shadow-xl m-5 lg:m-0'>
                <legend >ADD A PRODUCT</legend>
                <form onSubmit={handleSubmit} className=' m-5'>
                    <span className="label-text">Name</span>
                    <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder='Full name' className="input input-bordered  w-full" />
                    <span className="label-text">email</span>

                    <input name='email' defaultValue={user?.email} disabled type="email" placeholder='email' className="input input-bordered w-full " />
                    <label className="label">
                        <span className="label-text">Contact Number</span>
                    </label>
                    <input name='phoneNumber' type="number" placeholder='Ex. 01755000000' className="input input-bordered w-full" required />
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Select your product category.</span>
                        </label>
                        <select value={title} onChange={e => setTitle(e.target.value)} className="select select-bordered" required>
                            <option disabled selected>Pick one</option>
                            <option value={"637ff3cdf83a1fea58a72885"}>Toyota 4Runner</option>
                            <option value={"637ff3cdf83a1fea58a72884"}>BMW Q54gN Prime</option>
                            <option value={"637ff3cdf83a1fea58a72883"}>Mercedes-Benz AMG GT</option>
                        </select>
                    </div>

                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input name='image' type="text" placeholder='Valid url provide' className="input input-bordered w-full" required />
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input name='location' type="text" placeholder='Ex. London, 30j, milkvita' className="input input-bordered w-full " required />
                    <label className="label">
                        <span className="label-text">Original price</span>
                    </label>
                    <input name='original_price' placeholder='USD - $' type="number" className="input input-bordered w-full " required />
                    <label className="label">
                        <span className="label-text">Reseal price</span>
                    </label>
                    <input name='reseal_price' placeholder='USD - $' type="number" className="input input-bordered w-full " required />
                    <label className="label">
                        <span className="label-text">Product used time?</span>
                    </label>
                    <input name='year_used' type="number" placeholder='Ex. 3y or 2m or 20d ' className="input input-bordered w-full" required />
                    <label className="label">
                        <span className="label-text">Details product</span>
                    </label>
                    <input name='details' type="text" placeholder='Details product information provide' className="w-full input input-bordered mb-5" required></input>
                    <input type="submit" placeholder='' className='btn btn-accent' value="Submit" />
                </form>
            </fieldset>
        </div >
    );
};

export default AddAProduct;