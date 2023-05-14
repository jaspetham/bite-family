import React from 'react'
import './Plan.css';

function Plan(props) {
    let { image } = props;

    return (
        <div className="plan">
            <div className="plan-pic" style={{backgroundImage:`url(${image})`}}></div>
        </div>
    )
}

export default Plan