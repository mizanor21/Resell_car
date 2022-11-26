import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import loginLogo from '../../assets/logo/loginLogo.webp';
import { AuthContext } from '../../contexts/AuthProvider';
import './SignUp.css';

const Signup = () => {
    const { createUser, googleLogin, updateUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleLogin = data => {
        // console.log(data.user)
        createUser(data.email, data.password)
            .then(() => {
                toast.success('Successfully created user');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserInfo(data?.name, data?.email, data?.user);
                        navigate('/');
                    })
                    .catch(() => {

                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            })
    }

    const saveUserInfo = (name, email, userType) => {
        const userInfo = { name, email, userType }
        // console.log(userInfo);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(error => console.log(error))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                toast.success('Successfully login');
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            })
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
                    <label className="label">
                        <span className="label-text">Choose user type (Buyer or Seller)*</span>
                    </label>
                    <select {...register("user")} className="select w-full mb-5 input-bordered" required>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                    <input className='btn btn-black w-full mt-5 mb-3' type="submit" />
                    <div className="text-center">
                        <small >Already have an account? <Link to={'/login'} className='text-emerald-500'>Please login</Link></small>
                    </div>
                    <div className="divider">OR</div>
                </form>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full">Continue with google</button>
            </div>
        </div>
    );
};

export default Signup;