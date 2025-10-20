import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const News = () => {
    const [blogs, setBlogs] = useState([]);
    const location = useLocation()
    const isResourcePath = location.pathname.includes('/resource')


    useEffect(() => {
        fetch('/data/BlogData.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    
    // Slicing the blogs
    const slicedBlogs = isResourcePath ? blogs : blogs.slice(0, 3)

    return (
        <div className='bg-[#f55e89] py-20 '>
            <div className='text-center poppins lg:w-[700px] mx-auto space-y-4 '>
                <h2 className='text-[#c0ffca] text-xl lg:text-3xl font-semibold'>Resources</h2>
                <p className='text-[#f9fffa] text-2xl lg:text-6xl font-semibold'>Our latest news, thoughts, and guides.</p>
            </div>

            {/* Blogs Grid */}
            <div className='max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6'>
                {slicedBlogs.map(blog => (
                    <Link to={`/blogs/${blog.title.replace(/\s+/g, '-').toLowerCase()}`} key={blog.id} className='flex flex-col poppins bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                        <div className='flex-grow'>
                            <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className='w-full h-60 object-cover'
                            />
                            <div className='p-6 space-y-3'>
                                <h3 className='text-2xl font-semibold text-[#222]'>{blog.title}</h3>
                                <p className='text-sm text-[#096846]'>{blog.excerpt}</p>
                                <div className='flex justify-between items-center text-sm text-gray-500'>
                                    <span>By {blog.author.name}</span>
                                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                        <button className='font-semibold m-4 py-3 rounded text-white bg-[#096846] cursor-pointer'>
                            Read More +
                        </button>
                    </Link>
                ))}
            </div>

            <button className={`cursor-pointer flex items-center justify-center w-[150px] mx-auto text-white text-xl px-5 poppins rounded-full py-3 my-10 font-semibold ${isResourcePath ? '' : 'bg-[#096846]'} `}>{`${isResourcePath ? '' : 'See All'}`}</button>
        </div>
    );
};

export default News;
