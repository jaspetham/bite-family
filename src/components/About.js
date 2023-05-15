import React from 'react'
import './About.css'
import Image from 'react-bootstrap/Image'

import banner2 from '../assets/banner2.jpg'
import Title from './Title'

function About() {
  return (
    <section id='About' className='section-gap'>
        <div className="section-divider">
          <div className="row mx-0 gap-3 flex-md-nowrap">
            <div className="col-md-6 col-12">
              <div className="flex items-center h-full">
                <div className="w-full flex flex-col gap-3">
                    <Title title={'History'} primaryBg={false}/>
                    <h4 className='fs-400'>WE MAKING YOUR BRAND SHINE</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus tenetur rerum corporis culpa labore voluptate aspernatur eum, sequi officia eligendi, quos alias nemo voluptas. At.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est ut labore? Tempora odit iusto eius similique in, quasi, veritatis sapiente at, eaque inventore quibusdam.</p>
                    <a href="#About" className="btn-classic btn-100 fs-200 mt-3">Our Works</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <Image className='object-cover' fluid src={banner2}/>
            </div>
          </div>
        </div>

    </section>
  )
}

export default About