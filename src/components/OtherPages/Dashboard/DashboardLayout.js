import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Navbar from '../../SharedPages/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/usersInfo?email=${user?.email}`;

    const { data: usersInfo = [] } = useQuery({
        queryKey: ['usersInfo', user?.email],
        queryFn: () =>
            fetch(url)
                .then(res => res.json())
    })

    // console.log(usersInfo);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                        <li><Link to={'/dashboard/my-orders'}>My Orders</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;