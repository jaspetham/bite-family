import React from 'react'
import './Hero.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'

function Hero() {
    let options = {
        loop:false,
        items:1,
        nav:false,
        dots:false
    }
    return (
        <section id="Hero">
            <OwlCarousel className='owl-theme' {...options}>
                <div class='banner-wrap h-full'>
                    <div className="banner-img bgImgCover h-full" style={{backgroundImage:`url(${banner1})`}}>
                        <div className="banner-info">
                            <h1 className="fs-700">Welcome to Bite Family</h1>
                            <p className="fs-300">We keep you super healthy!</p>
                        </div>
                    </div>
                </div>
                <div class='banner-wrap h-full'>
                    <div className="banner-img bgImgCover h-full" style={{backgroundImage:`url(${banner2})`}}>
                        <div className="banner-info">
                            <h1 className="fs-700">Welcome to Bite Family</h1>
                            <p className="fs-300">We keep you super healthy!</p>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    )
}

export default Hero