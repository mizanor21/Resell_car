import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

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
            this is my orders page!
        </div>
    );
};

export default MyOrders;