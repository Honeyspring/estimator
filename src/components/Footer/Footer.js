import React from 'react';
import './Footer.css';
import linkedin from './icons/linkedin.svg';
import facebook from './icons/facebook.svg';
import gmail from './icons/gmail.svg';
import mobile from './icons/mobile.svg';
import github from './icons/github.svg';
import whatsapp from './icons/whatsapp.svg';

const Footer = () => {
    
      return (
        <footer className="footer" id="footer">

           
             <a className=' dim' href="https://www.facebook.com/ogunsola.oyindamola"><img className="icons" src={facebook} alt='facebook'/></a>
            <a className=' dim' href="mailto:ogunsola.irene@gmail.com"><img className="icons" src={gmail} alt='gmail'/></a>
            <a className=' dim' href="https://wa.me/+2348092916689"><img className="icons" src={whatsapp} alt='whatsapp'/></a>
            <a className=' dim' href="https://github.com/Honeyspring"><img  className="icons" src={github} alt='github'/></a>
            <a className=' dim' href="tel:+2348092916689"><img  className="icons" src={mobile} alt='mobile'/></a>
            <a className=' dim' href="https://linkedin.com/in/ogunsola-oyindamola"><img className="icons" src={linkedin} alt='linkedin'/></a>
             <p className=' link dim  pa3 '>&copy;  {new Date().getFullYear()} Honeyspring</p>
        
        </footer>
      );
    
}

export default Footer;
