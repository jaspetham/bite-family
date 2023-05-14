import React from 'react'
import './DietPlan.css'
import Title from './Title'
import Plan from './Plan'

import banner2 from '../assets/banner2.jpg'

function DietPlan() {
  return (
    <section id="Diet" className='bg-white clr-text section-gap'>
        <div className="section-divider">
            <div className="flex flex-col gap-3">
                <Title title={'Diet Plan'} primaryBg={true}/>
                <h4 className='fs-400'>Lorem ipsum dolor sit amet consectetur adipisicing praesentium nulla quod sequi reiciendis.</h4>
                <div className="plans-wrap">
                    <Plan image={banner2}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DietPlan