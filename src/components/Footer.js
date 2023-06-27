import React from 'react'
import './Footer.css'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer-distributed">
			<div className="row gap-2">
        <div className="col"></div>
        <div className="col-12 col-lg-4">
          <div className="footer-left flex flex-col">
            <Image height={200} width={200} fluid src={'/assets/images/logo_white_fam.svg'}/>
            <p className="footer-links flex gap-2 items-center my-3">
              <a href="#Home">Home</a>
              <a href="#About">History</a>
              <a href="#Portfolio">Portfolio</a>
              <a href="#Pricing">Pricing</a>
            </p>
            <p className="footer-company-name">Bite Family © 2023</p>
            </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="footer-center flex flex-col gap-3">
            <p className="footer-company-about">
              <span className='fs-200'>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
            <div className='info flex gap-2 items-center'>
              <FontAwesomeIcon className='icon fs-200' icon={faMapMarkerAlt}/>
              <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
            </div>
            <div className='info flex gap-2 items-center'>
              <FontAwesomeIcon className='icon fs-200' icon={faPhone}/>
              <p><a href="mailto:support@company.com">+6012345678</a></p>
            </div>
            <div className='info flex gap-2 items-center'>
              <FontAwesomeIcon className='icon fs-200' icon={faEnvelope}/>
              <p><a href="mailto:support@company.com">support@company.com</a></p>
            </div>
            <div className="footer-icons flex gap-3">
              <a href="#Footer">
                <FontAwesomeIcon className='icon fs-200' icon={faFacebookF}/>
              </a>
              <a href="#Footer">
                <FontAwesomeIcon className='icon fs-200' icon={faInstagram}/>
              </a>
              <a href="#Footer">
                <FontAwesomeIcon className='icon fs-200' icon={faWhatsapp}/>
              </a>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
		</footer>
  )
}

export default Footer