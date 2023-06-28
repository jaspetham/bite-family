import React from 'react'
import './Hero.css';
import OwlCarousel from 'react-owl-carousel';

import Image from 'react-bootstrap/Image'

import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'

import flag1 from '../assets/flags/malaysia.png';
import flag2 from '../assets/flags/singapore.png';
import chevronLeft from '../assets/icons/circle-chevron-left-solid.svg';
import chevronRight from '../assets/icons/circle-chevron-right-solid.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



function Hero() {
    let options = {
        loop:false,
        items:1,
        nav:true,
        dots:false,
        navText: [
            `<div class='nav-button owl-prev'><img src=${chevronLeft}/></div>`, 
            `<div class='nav-button owl-next'><img src=${chevronRight}/></div>`
        ],
    }
    return (
        <section id="Hero">
            <OwlCarousel className='owl-theme' {...options}>
                <div className='banner-wrap h-full'>
                    <div className="banner-img bgImgCover h-full" style={{backgroundImage:`url(${banner1})`}}>
                        <div className="banner-info">
                            <Image fluid src={'/assets/images/logo_white_fam.svg'}/>
                            <div className="mt-3">
                                <p className="fs-400">We keep you super healthy!</p>
                                <div className="flex flex-col justify-center gap-3 mt-5">
                                    <div className="flex justify-center gap-5">
                                        <a href="#About" className="btn-classic btn-transparent rounded-lg btn-hero fs-200 text-capitalize rounder-2xl">Store</a>
                                        <a href="#About" className="btn-classic btn-transparent rounded-lg btn-hero fs-200 text-capitalize rounder-2xl">Blog</a>
                                    </div>
                                    <div className="flex justify-center flag-pos">
                                        <Image className='flag-img' fluid src={flag1}/>
                                        <Image className='flag-img' fluid src={flag2}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banner-wrap h-full'>
                    <div className="banner-img bgImgCover h-full" style={{backgroundImage:`url(${banner2})`}}>
                        <div className="banner-info">
                            <Image fluid src={'/assets/images/logo_white_fam.svg'}/>
                            <div className="mt-3">
                                <p className="fs-400">We keep you super healthy!</p>
                                <div className="flex flex-col justify-center gap-3 mt-5">
                                    <div className="flex justify-center gap-5">
                                        <a href="#About" className="btn-classic btn-transparent rounded-lg btn-hero fs-200 text-capitalize rounder-2xl">Store</a>
                                        <a href="#About" className="btn-classic btn-transparent rounded-lg btn-hero fs-200 text-capitalize rounder-2xl">Blog</a>
                                    </div>
                                    <div className="flex justify-center flag-pos">
                                        <Image className='flag-img' fluid src={flag1}/>
                                        <Image className='flag-img' fluid src={flag2}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
            <div className="arrow">
                <FontAwesomeIcon className='fs-400' icon={faChevronDown}/>
            </div>
        </section>
    )
}

export default Hero