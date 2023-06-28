import React from 'react'
import './Plan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

function Plan(props) {
    let { image, title, description, pdfLink } = props;

    return (
        <div className="plan flex text-white">
            <div className="plan-pic relative" style={{backgroundImage:`url(${image})`}}>
                <div className="plan-info">
                    <div className="h-full flex flex-col justify-center gap-3 text-justify">
                        <h1 className="fs-300">{title}</h1>
                        <p className='fs-200'>{description}</p>
                    </div>
                </div>
            </div>
            <div className="plan-links flex flex-col gap-3">
                <div className="plan-link">
                    <a href={pdfLink} target='_blank' rel="noreferrer" className=' fs-400 text-white'>
                        <FontAwesomeIcon icon={faFilePdf}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Plan