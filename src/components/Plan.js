import React from 'react'
import './Plan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faHeart, faHeartPulse } from '@fortawesome/free-solid-svg-icons';

function Plan(props) {
    let { image, title, description } = props;

    return (
        <div className="plan flex text-white">
            <div className="plan-pic relative" style={{backgroundImage:`url(${image})`}}>
                <div className="plan-info">
                    <div className="flex flex-col justify-center gap-3">
                        <h1 className="fs-300">{title}</h1>
                        <p className='fs-200'>{description}</p>
                    </div>
                </div>
            </div>
            <div className="plan-links flex flex-col gap-3">
                <div className="plan-link">
                    <a href="/" className='text-white'>
                        <FontAwesomeIcon icon={faDumbbell}/>
                    </a>
                </div>
                <div className="plan-link">
                    <a href="/" className='text-white'>
                        <FontAwesomeIcon icon={faHeart}/>
                    </a>
                </div>
                <div className="plan-link">
                    <a href="/" className='text-white'>
                        <FontAwesomeIcon icon={faHeartPulse}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Plan