import React from 'react';
import { Link } from 'react-router-dom';
import blog_bg from '../../../assets/logo/blog_1.webp';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog '>
            <div className="container mx-5 md:mx-auto ">
                <div className="flex">
                    <div className="w-1/2 flex items-center">
                        <div className="text-white">
                            <h3 className='text-3xl font-bold'>Our Blog</h3>
                            <p><Link to={'/'} className='hover:text-green-600 hover:font-bold'>Home </Link> / Blog</p>
                        </div>
                    </div>
                    <div className="flex md:justify-end w-1/2 py-10">
                        <img src={blog_bg} className='w-1/2 rounded-3xl' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;