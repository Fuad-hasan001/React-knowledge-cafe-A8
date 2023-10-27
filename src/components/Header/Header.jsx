import React from 'react';
import './Header.css'
import profile from '../../images/profile.png'

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <h2>Tech Blogs</h2>

                <img src={profile} alt="" />
            </div>

            <hr />
        </nav>
    );
};

export default Header;