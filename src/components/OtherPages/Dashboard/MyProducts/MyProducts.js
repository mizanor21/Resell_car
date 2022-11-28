import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import MyProduct from './MyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `https://car-world-server-mizanor21.vercel.app/products?email=${user?.email}`;
    // console.log(url);

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: () =>
            fetch(url)
                .then(res => res.json())
    })
    console.log(products);

    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                products.map(myProduct => <MyProduct key={myProduct._id} myProduct={myProduct}> </MyProduct>)
            }
        </div>
    );
};

export default MyProducts;