import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import loginLogo from '../../assets/logo/loginLogo.webp';
import './SignUp.css';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <img className='w-1/3 hidden md:block' src={loginLogo} alt="" />
            <div className="shadow-xl p-10 rounded-lg">
                <h1 className='text-2xl text-center'>Signup</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Full Name *</span>
                        </label>
                        <input {...register("name")} type="name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email *</span>
                        </label>
                        <input {...register("email")} type="email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password *</span>
                        </label>
                        <input {...register("password")} type="password" className="input input-bordered w-full" />
                    </div>
                    <div className="flex mt-5">
                        <div className="flex mr-5">
                            <input type="radio" {...register("buyer")} name="radio-1" value="buyer" className="radio" checked />
                            <p>Buyer</p>
                        </div>
                        <div className="flex">
                            <input type="radio" {...register("seller")} name="radio-1" value="seller" className="radio" />
                            <p>Seller</p>
                        </div>
                    </div>
                    <input className='btn btn-black w-full mt-5 mb-3' type="submit" />
                    <div className="text-center">
                        <small >Already have an account? <Link to={'/login'} className='text-emerald-500'>Please login</Link></small>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue with google</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;