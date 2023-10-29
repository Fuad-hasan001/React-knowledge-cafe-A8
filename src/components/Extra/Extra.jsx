// Blogs component

// import React, { useEffect, useState } from 'react';
// import './Blogs.css'
// import Blog from '../Blog/Blog';
// import Bookmark from '../Bookmark/Bookmark';
// import QuesAns from '../QuesAns/QuesAns';

// const Blogs = () => {

//     // fetching date and add to state------------------
//     //declare state for access each blog
//     const [blogs, setBlogs] = useState([])

//     // to get data from blogs.json
//     useEffect(() => {
//         fetch('blogs.json')
//             .then(response => response.json())
//             .then(data => setBlogs(data))
//     }, [])
//     // ***************************************************

//     // bookmark section-----------------------------
//     const [bookmark, setBookmark] = useState([])

//     const addSpentReadTime = (blog) =>{
//         console.log("added", blog)

//         let newBookmark = [];
//         const exist = bookmark.find(bl => bl.id === blog.id);
//         if(!exist){
//             blog.readTime = 1
//             newBookmark = [...bookmark, blog]
//         }
//         else{
//             exist.readTime = exist.readTime + 1
//             const remaining = bookmark.filter(bl => bl.id !== blog.id)
//             newBookmark = [...remaining, exist]
//         }
//         setBookmark(newBookmark)
//     }

//     // **********************************************
//     // Question and Answer: --------------------------
//         // to get the data from QesAns.json file
//     const [quesAns, setQuesAns] = useState([])

//     useEffect(() => {
//         fetch('QuesAns.json')
//             .then(response => response.json())
//             .then(data => setQuesAns(data))
//     }, [])
//     // *********************************************
//     return (
//         <div>
//             <div className='main-container'>
//                 <div className='blogs-container'>
//                     {
//                         blogs.map(blog => <Blog
//                             key={blog.id}
//                             blog={blog}
//                             addSpentReadTime = {addSpentReadTime}
//                         ></Blog>)
//                     }

//                 </div>


//                 <div className='Bookmarks-container'>
//                     <Bookmark
//                         bookMark = {bookmark}
//                     ></Bookmark>
//                 </div>

//                 <hr />
//             </div>


//                     {/* Last component: Question and answer section*/}
//             <div className='QuesAns-container'>
//                 <h2>Question and answer</h2>
//                 {
                    
//                     quesAns.map(QA => <QuesAns
//                         key={QA.id}
//                         QA={QA}
//                     ></QuesAns>)
//                 }
//             </div>

//         </div>
//     );
// };

// export default Blogs;

// Blog.jsx

// import React from 'react';
// import './Blog.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

// const Blog = (props) => {

//     // console.log("props",props)
//     // received data via props and destructuring
//     const { blogCoverImg, authorImg, authorName, publishDate, readTime, blogTitle, hashFile} = props.blog;

//     // mark as read
//     const addSpentReadTime = props.addSpentReadTime

//     return (
//         <div className='blog'>
//             <img className='cover-img' src={blogCoverImg} alt="" />

//                 <div className="writer-container">
//                     <div className='author'>
//                         <img className='author-img' src={authorImg} alt="" />
//                         <div className="author-info">
//                             <h3>{authorName}</h3>
//                             <p><small>{publishDate}</small></p>
//                         </div>
//                     </div>

//                     <div>
//                         <p><small>{readTime} min read <span>
//                             <button className='btn-bookmark'><FontAwesomeIcon icon={faBookBookmark} /></button></span></small></p>
//                     </div>
//                 </div>

//                 <div className="blog-info">
//                     <h2>{blogTitle}</h2>
//                     <p><small>{hashFile}</small></p>
//                     <button className='btn-readTime' onClick={() => addSpentReadTime(props.blog)} href="/">Mark as read</button>
//                 </div>
//         </div>
//     );
// };

// export default Blog;