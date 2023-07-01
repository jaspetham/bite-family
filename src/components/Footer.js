import React from 'react'
import './Footer.css'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import flag1 from '../assets/flags/malaysia.png';
import flag2 from '../assets/flags/singapore.png';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer-distributed">
			<div className="row gap-2">
        <div className="col"></div>
        <div className="col-12 col-lg-4">
          <div className="footer-left flex flex-col ff-bold">
            <div className='footer-img' style={{ backgroundImage:`url(/assets/images/logo_white_fam.svg)`}}></div>
            <div className="footer-links flex gap-2 items-center my-3">
              <p className='flex gap-2 items-center'>Malaysia <Image height={20} width={20} fluid src={flag1}/></p>
              <p className='flex gap-2 items-center'>Singapore <Image height={20} width={20} fluid src={flag2}/></p>
            </div>
            <p className="footer-company-name">Bite Family © 2023</p>
            </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="footer-center flex flex-col gap-3 font-normal">
            <div className="footer-company-about">
              <span className='fs-200 ff-bold'>About the company</span>
              <p className='fs-100'>Founded with the belief that gourmet dieting is the solution to a successful diet & health journey, Bite Family takes pride in crafting delicious meals that’s tailored for the individual.</p>
            </div>
            <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/PhUNQq6irxjtFQiV7" className='info flex gap-2 items-center'>
              <FontAwesomeIcon className='icon fs-200' icon={faMapMarkerAlt}/>
              <p className='fs-100'>Bite Family, Infinity Tower, Jalan SS 6/3, 47301, Petaling Jaya, Selangor</p>
            </a>
            <a className='info flex gap-2 items-center' target="_blank" rel="noreferrer" href="https://wa.me/+60122279967">
              <FontAwesomeIcon className='icon fs-200' icon={faPhone}/>
              <p className='fs-100'>+6012 227 9967</p>
            </a>
            <a className='info flex gap-2 items-center' target="_blank" rel="noreferrer" href="mailto:support@company.com">
              <FontAwesomeIcon className='icon fs-200' icon={faEnvelope}/>
              <p className='fs-100' >hi@bitefamily.my</p>
            </a>
            <div className="footer-icons flex gap-3">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/MYBiteFamily">
                <FontAwesomeIcon className='icon fs-200' icon={faFacebookF}/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mybitefamily/">
                <FontAwesomeIcon className='icon fs-200' icon={faInstagram}/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://wa.me/+60122279967">
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