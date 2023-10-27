import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='main-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}

                    ></Blog>)
                }

            </div>
            <div className='Bookmarks-container'>
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;