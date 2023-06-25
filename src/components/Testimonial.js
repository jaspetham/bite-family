import React from 'react'
import './Testimonial.css'
import OwlCarousel from 'react-owl-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import banner1 from '../assets/banner1.jpg'

function Testimonial() {
  let options = {
    loop:false,
    items:1,
    nav:false,
    dots:true
  }
  let quotes = [
    {
      image:banner1,
      name:'Mr Tom Brady',
      company: 'Geckkkooo',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic perspiciatis corrupti molestiae tempora sapiente iusto iure dolores quidem vel eveniet.'
    },
    {
      image:banner1,
      name:'Mr Nobody',
      company: 'nobody',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, saepe ut dolorem necessitatibus enim ipsam! Expedita dicta maxime voluptas incidunt.'
    },
  ]
  return (
    <section id="Testimonial" className='clr-text text-white'>
      <OwlCarousel className='testimonial-wrapper owl-theme py-5' {...options}>
        {quotes.map((quote,index) =>{
          return(
            <div key={index} className="ts-wrapper">
              <div className="ts-image mb-3" style={{backgroundImage:`url(${banner1})`}}></div>
              <div className="ts-quote">
                <FontAwesomeIcon className='quote-icon left' icon={faQuoteLeft}/>
                <blockquote className='fs-300 m-0'>{quote.description}</blockquote>
                <FontAwesomeIcon className='quote-icon right' icon={faQuoteRight}/>
              </div>
              <div className="ts-company mt-2">
                <p className="fs-200">{quote.name}</p>
                <p className="fs-100">{quote.company}</p>
              </div>
            </div>
          )
        })}
        
      </OwlCarousel>
    </section>
  )
}

export default Testimonial