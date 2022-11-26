import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <div className='container mx-5 md:mx-auto my-10'>
            <div className="flex">
                <h1 className=' p-6 grid grid-cols-1 bg-slate-800 text-yellow-400 text-2xl md:text-3xl font-bold rounded-br-full pr-20 mb-5 rounded-xl'>BROWSE BY CAR TYPE</h1>
                <h1 className='hidden lg:grid grid-cols-11 text-white '>.</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;