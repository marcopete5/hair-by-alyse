import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
        return (
            <ul id='nav'>
              <Link to='/quote' className="navItems">GET A QUOTE</Link>
              <Link to='/pricing' className="navItems">ADDITIONAL PRICING INFO</Link>
              <Link to='/faq' className="navItems">FAQ's</Link>
              <Link to='/work' className="navItems">PREVIOUS WORK</Link>  
            </ul>
        );
    }

export default Navbar;