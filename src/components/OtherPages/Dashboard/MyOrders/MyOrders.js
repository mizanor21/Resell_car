import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/booking_products?email=${user?.email}`;

    const { data: booking_products = []
    } = useQuery({
        queryKey: ['booking_products', user?.email],
        queryFn: () =>
            fetch(url)
                .then(res => res.json())
    })
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 mx-5">
                {
                    booking_products.map(booking_product => <MyOrder key={booking_product._id} booking_product={booking_product}></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;