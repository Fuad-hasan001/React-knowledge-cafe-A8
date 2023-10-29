import React, { useState } from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
 
    return (
        <div className='bookmark'>
                <div className='spentTime-count'>
                    <h3>Spent time on read : 170 min</h3>
                </div>

                <div className='bookmarked-blogs'>
                    <h3>Bookmarked Blogs: </h3>
                    <div>
                        <h4>hello</h4>
                        
                    </div>
                </div>    
        </div>
    );
};

export default Bookmark;