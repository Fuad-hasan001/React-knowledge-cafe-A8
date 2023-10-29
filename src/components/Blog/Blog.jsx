import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {

    // console.log("props",props)
    // received data via props and destructuring
    const { blogCoverImg, authorImg, authorName, publishDate, readTime, blogTitle, hashFile} = props.blog;


    return (
        <div className='blog'>
            <img className='cover-img' src={blogCoverImg} alt="" />

                <div className="writer-container">
                    <div className='author'>
                        <img className='author-img' src={authorImg} alt="" />
                        <div className="author-info">
                            <h3>{authorName}</h3>
                            <p><small>{publishDate}</small></p>
                        </div>
                    </div>

                    <div>
                        <p><small>{readTime} min read <span>
                            <button className='btn-bookmark'><FontAwesomeIcon icon={faBookBookmark} /></button></span></small></p>
                    </div>
                </div>

                <div className="blog-info">
                    <h2>{blogTitle}</h2>
                    <p><small>{hashFile}</small></p>
                    <a href="/">Mark as read</a>
                </div>
        </div>
    );
};

export default Blog;