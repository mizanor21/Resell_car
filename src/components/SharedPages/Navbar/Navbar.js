import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../assets/logo/logo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user;
                toast.success('Logout successfully!', user?.displayName);
            })
            .catch(error => {
                // const errorMessage = error.message;
                // toast.error(errorMessage)
            })
    }

    const navItems = <>
        <li><Link to={'/blog'}>Blog</Link></li>
        {
            user ? <button onClick={handleLogOut}>Logout</button> : <li><Link to={'/login'}>Login</Link></li>
        }
    </>

    return (
        <div className=' bg-base-100'>
            <div className="navbar container mx-auto flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-2xl text-yellow-400">
                        <img className='w-[50px] mr-3' src={logo} alt="" />  Car World</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;