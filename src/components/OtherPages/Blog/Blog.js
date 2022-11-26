import React from 'react';
import { Link } from 'react-router-dom';
import blog_bg from '../../../assets/logo/blog_1.webp';
import './Blog.css'

const Blog = () => {
    return (
        <div className=''>
            <div className=" blog ">
                <div className="container mx-5 md:mx-auto max-w-[1220px] flex">
                    <div className="w-1/2 flex items-center">
                        <div className="text-white">
                            <h3 className='text-4xl font-bold'>Our Blog</h3>
                            <div className="text-sm breadcrumbs">
                                <ul>
                                    <li>
                                        <Link to={'/'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end w-1/2 py-10">
                        <img src={blog_bg} className='w-1/2 rounded-3xl' alt="" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-10">
                <h1 className='text-5xl font-bold my-5'>F&Q: </h1>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p> attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p> attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p> attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p> attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;