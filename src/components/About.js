import React from 'react'
import './About.css'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles, faHandshake, faUser, faHandSparkles, faPersonHalfDress } from '@fortawesome/free-solid-svg-icons';

import banner2 from '../assets/banner2.jpg'
import Title from './Title'

function About() {
  return (
    <section id='About' className=''>
        <div className="section-divider section-gap">
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
        <div className="philo-grid">
          <div className="philo flex gap-2 items-center flex-col">
            <FontAwesomeIcon className='fs-400' icon={faUser} />
            <span className='fs-300'>Our Client comes first</span>
          </div>
          <div className="philo flex gap-2 items-center flex-col">
            <FontAwesomeIcon className='fs-400' icon={faPersonHalfDress} />
            <span className='fs-300'>Every individual is different</span>
          </div>
          <div className="philo flex gap-2 items-center flex-col">
            <FontAwesomeIcon className='fs-400' icon={faWandMagicSparkles} />
            <span className='fs-300'>Absolute Transparency</span>
          </div>
          <div className="philo flex gap-2 items-center flex-col">
            <FontAwesomeIcon className='fs-400' icon={faHandSparkles} />
            <span className='fs-300'>Cleanliness & Sanitisation</span>
          </div>
          <div className="philo flex gap-2 items-center flex-col">
            <FontAwesomeIcon className='fs-400' icon={faHandshake} />
            <span className='fs-300'>No Upselling</span>
          </div>
        </div>
    </section>
  )
}

export default About