import React from 'react';
import './Header.css';
import logo from '../Footer/icons/logo.png';


const Header = ({openNav,closeNav }) => {
    
      return (
        <div className="topnav" id="myTopnav">
         <p className=' dim logo'><img  src={logo} alt='logo'/></p>
        <nav >
            <p className='f2 link dim white  pa3 '>Covid-19 Estimator</p>
           
        </nav>
        <i className=' dim slog'>#BuildForSDG Challenge</i>
        </div>
      );
    
}

export default Header;
