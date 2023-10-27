// import React from 'react';
// import './Blog.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

// const Blog = (props) => {

//     // received data via props and destructuring
//     const {id, img, name, title, coverImg, readTime, publishDate, hashFile} = props.blog;

//     const addToBookMark = (id) =>{
//         console.log("added", id)
//     }

//     return (
//         <div className='blog'>
//             <img className='cover-img' src={coverImg} alt="" />

//                 <div className="writer-container">
//                     <div className='author'>
//                         <img className='author-img' src={img} alt="" />
//                         <div className="author-info">
//                             <h3>{name}</h3>
//                             <p><small>{publishDate}</small></p>
//                         </div>
//                     </div>

//                     <div>
//                         <p><small>{readTime} min read <span>
//                             <button onClick={() => addToBookMark(id)} className='btn-bookmark'><FontAwesomeIcon icon={faBookBookmark} /></button></span></small></p>
//                     </div>
//                 </div>

//                 <div className="blog-info">
//                     <h2>{title}</h2>
//                     <p><small>{hashFile}</small></p>
//                     <a href="/">Mark as read</a>
//                 </div>
//         </div>
//     );
// };

// export default Blog;