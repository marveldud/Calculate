import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       
       <div className='navbar'>
        <div className="logo">FunTime</div>
        <div className="menus">
            <ul className="menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/watchlist'>WatchList</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
      
    </div>
        
    </>
  )
}

export default Navbar;
