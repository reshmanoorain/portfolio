import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <ul>
            <li>
                <Link to={'/Home'} >
                    Home
                </Link>

            </li>
            <li>
            <Link to={'/AboutMe'} >
                AboutMe
            </Link>
            </li>
            <li>
            <Link to={'./Skills'} >
                Skills
            </Link>
            </li>
            </ul>
        
    )
}
export default Header;