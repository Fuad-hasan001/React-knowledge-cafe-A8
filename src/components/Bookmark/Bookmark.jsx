import React from 'react';
import './Bookmark.css'
const Bookmark = () => {
    return (
        <div className='bookmark'>
                <div className='spentTime-count'>
                    <h3>Spent time on read : {0} min</h3>
                </div>

                <div className='bookmarked-blogs'>
                    <h3>Bookmarked Blogs : 8</h3>
                    {/* <h4>{bookMarked}</h4> */}
                    <div>
                        <h4>Master Microsoft Power Platform and Become an In-Demand!</h4>
                    </div>
                    
                </div>
        </div>
    );
};

export default Bookmark;