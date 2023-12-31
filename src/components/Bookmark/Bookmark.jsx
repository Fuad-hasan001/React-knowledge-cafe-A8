import React, { useState } from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
 
    // const bookmark = props.bookmark;
    // console.log(bookmark) //-------------just for check
    const {bookmark, timeCount} = props;  // bookmark and props both are an array


    let marked = [];
    for(const blog of bookmark){
        // console.log(blog.blogTitle);
        marked = [...marked, blog.blogTitle]
    }

    // spend time on read
    let totalTimeCount = 0;
    for(const blog of timeCount){
        totalTimeCount = totalTimeCount + blog.readTime

    }
    // console.log(totalTimeCount)
   
    return (
        <div className='bookmark'>
                <div className='spentTime-count'>
                    <h3>Spent time on read : {totalTimeCount} min</h3>
                </div>

                <div className='bookmarked-blogs'>
                    <h3>Bookmarked Blogs: {bookmark.length}</h3>
                    <div>
                        
                        <h3>{marked}</h3>
                        
                    </div>
                </div>    
        </div>
    );
};

export default Bookmark;