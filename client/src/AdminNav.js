import React from 'react';
import {Link} from 'react-router-dom';

const AdminNav = () => {
        return (
            <div id='adminNavbar'>
              <Link to='/' ><h1 id='logo'>HairByAlyse</h1></Link>
              <ul id='nav'>
                <Link to='/admin' className="navItems">MANAGE REQUESTS</Link>
                <Link to='/pricing' className="navItems">CHECK CALENDAR</Link>
                <Link to='/' className="navItems">RETURN TO SITE</Link>  
              </ul>
            </div>
            
        );
    }

export default AdminNav;