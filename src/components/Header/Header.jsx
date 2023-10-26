import React from 'react';
import './Header.css'
import profile from '../../images/profile.png'

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <h2>Tech Blogs</h2>

                {/* <div>
                <a href="/Home">Home</a>
                <a href="/Blogs">Blogs</a>
                <a href="/Bookmarks">Bookmarks</a>
                <a href="/Ques&Ans">Ques&Ans</a>
            </div> */}

                <img src={profile} alt="" />
            </div>

            <hr />
        </nav>
    );
};

export default Header;