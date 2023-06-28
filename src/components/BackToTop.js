import React from 'react'
import './BackToTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function BackToTop() {
    const toTop = () =>{
        document.documentElement.scrollTop = 0; // For modern browsers
        document.body.scrollTop = 0; // For older browsers
    }
    return (
        <div onClick={() => toTop()} className="back-to-top fs-500">
            <FontAwesomeIcon icon={faChevronUp}/>
        </div>
    )
}

export default BackToTop