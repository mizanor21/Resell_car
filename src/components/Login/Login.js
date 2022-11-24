import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import loginLogo from '../../assets/logo/loginLogo.webp';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('Successfully login!', user?.displayName);
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
                <h1 className='text-2xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
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

                    <input className='btn btn-black w-full mt-5 mb-3' type="submit" />
                    <div className="text-center">
                        <small >New to recycle? <Link to={'/signup'} className='text-emerald-500'>Create new account</Link></small>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue with google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;