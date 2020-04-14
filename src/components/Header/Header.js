import React from 'react';
import './Header.css';

const Header = ({openNav,closeNav }) => {
    
      return (
        <div className="topnav" id="myTopnav">
        <nav >
            <p className='f2 link dim white  pa3 '>Covid-19 Estimator</p>
        </nav>
       
        </div>
      );
    
}

export default Header;
