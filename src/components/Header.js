import React, { useEffect, useState } from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    const openToggle = (x) =>{
        x.classList.toggle("change");
        document.querySelector('.navWrap').classList.toggle('open');
    }
    return (
        <nav className={scrollPosition > 0 ? 'nav items-center scrolled' : 'nav items-center'}>
            <div className='imgBrand relative flex items-center'>
                <a href="#Hero">
                    <img src={'/assets/images/logo_dark.jpg'} alt='logo'/>
                </a>            
            </div>
            <div className='burgerWrap'>
                <div className='burger' onClick={(event)=>{openToggle(event.currentTarget)}}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
            </div>
            <div className='navWrap'>
                <ul className='navLinks'>
                    <li>
                        <a href="#Hero" className='nav-link active'>Home</a>
                    </li>
                    <li>
                        <a href="#Hero" className='nav-link'>About Us</a>
                    </li>
                    <li>
                        <a href="#Hero" className='nav-link'>Diet Plans</a>
                    </li>
                    <li>
                        <a href="#Hero" className='nav-link'>Pricing</a>
                    </li>
                    <li>
                        <a href="#Hero" className='nav-link'>FAQ</a>
                    </li>
                    <li>
                        <a href="#Hero" className='nav-link'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <ul className='socials'>
                <li className="nav-link">
                    <a href="#Hero" className='icon'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#Hero" className='icon'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#Hero" className='icon'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Header