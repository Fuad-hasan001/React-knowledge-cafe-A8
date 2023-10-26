import React from 'react';
import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                <img src='' alt="" />
                <div className="writer-info">
                    <div>
                        <img src="" alt="" />
                        <h6>Name</h6>
                        <p><small>Mar 14 (4 Days ago)</small></p>
                    </div>
                    <div>
                        <p><small>05 min read <span><a href=""><FontAwesomeIcon icon={faBookBookmark} /></a></span></small></p>
                    </div>
                </div>

                <div className="blog-info">
                    <h2>How to get your first job</h2>

                    <caption><small>#beginners</small></caption>

                    <p><a href="/">Mark as read</a></p>
                </div>

            </div>
            <div className='Bookmark-container'>
                <div className='spentTime-count'>
                    <h3>Spent time on read : 177 min</h3>
                </div>
                <div className='bookmarked-blogs'>
                    <h3>Bookmarked Blogs : 8</h3>
                </div>
            </div>
        </div>
    );
};

export default Blogs;