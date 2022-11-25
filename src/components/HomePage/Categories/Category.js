import React from 'react';

const Category = ({ category }) => {
    const { category_name, img } = category;
    console.log(category);
    return (
        <button>
            <div className=' cursor-pointer'>
                <div className="card bg-base-100 border-[4px] hover:border-yellow-400 shadow-xl rounded-[20px] image-full">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="flex justify-center items-center card-body ">
                        <h2 className="card-title hover:text-yellow-400">{category_name}</h2>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default Category;