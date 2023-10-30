import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import QuesAns from '../QuesAns/QuesAns';

const Blogs = () => {

    // fetching date and add to state------------------
    //declare state for access each blog
    const [blogs, setBlogs] = useState([])

    // to get data from blogs.json
    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])


    // bookmark section-----------------------------
    const [bookmark, setbookmark] = useState([])
    
    // bookmark-blogsCount:  declare event handler
     const handleBlogCountToBookmark = (blog) =>{
        // console.log('blog added', blog)

        // create new bookmark
        const newBookmark = [...bookmark, blog]
        setbookmark(newBookmark)
    }

    

    // spend time on read--------------------
    const [timeCount, setTimeCount] = useState([])

    const handleTimeCountToBookmark = (blog) =>{
        const newTimeCount = [...timeCount, blog]
        setTimeCount(newTimeCount)
    }


    // Question and Answer: -----------------------
        // to get the data from QesAns.json file
    const [quesAns, setQuesAns] = useState([])

    useEffect(() => {
        fetch('QuesAns.json')
            .then(response => response.json())
            .then(data => setQuesAns(data))
    }, [])
    // *********************************************
    return (
        <div>
            <div className='main-container'>
                <div className='blogs-container'>
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                            handleBlogCountToBookmark = {handleBlogCountToBookmark}
                            handleTimeCountToBookmark = {handleTimeCountToBookmark}
                        ></Blog>)
                    }

                </div>


                <div className='Bookmarks-container'>
                    {/* <h3>Bookmarked Blogs: {bookmark.length}</h3> */}

                    <Bookmark
                        bookmark = {bookmark}
                        timeCount = {timeCount}
                    ></Bookmark>
                </div>

                <hr />
            </div>


                    {/* Last component: Question and answer section*/}
            <div className='QuesAns-container'>
                <h2>Question and answer</h2>
                {
                    
                    quesAns.map(QA => <QuesAns
                        key={QA.id}
                        QA={QA}
                    ></QuesAns>)
                }
            </div>

        </div>
    );
};

export default Blogs;