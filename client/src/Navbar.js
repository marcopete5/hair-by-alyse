import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
        return (
            <div>
              <Link to='/' ><h1 id='logo'>HairByAlyse</h1></Link>
              <ul id='nav'>
                <Link to='/quote' className="navItems">GET A QUOTE</Link>
                <Link to='/pricing' className="navItems">ADDITIONAL PRICING INFO</Link>
                <Link to='/faq' className="navItems">FAQ's</Link>
                <Link to='/admin' className="navItems">PREVIOUS WORK</Link>  
              </ul>
            </div>
            
        );
    }

export default Navbar;