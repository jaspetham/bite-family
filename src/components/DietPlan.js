import React from 'react'
import './DietPlan.css'
import Title from './Title'
import Plan from './Plan'

import banner2 from '../assets/banner2.jpg'

function DietPlan() {
  let plansInfo = [
    {
      image:banner2,
      title:'BITE’s Ketogenic Diet',
      description:'Our very own version of the popular Ketogenic Diet. We’ve extensively modified the diet to ensure safe weight loss without the drawbacks of a conventional Ketogenic Diet. [Top Demand]'
    },
    {
      image:banner2,
      title:'BITE’s Gout-Aid Diet',
      description:'Gout is the bane of many Malaysians and we know that the best way to combat gout is through a diet tailored specifically to combat gout.'
    },
    {
      image:banner2,
      title:'BITE’s Carb-Safe Diet',
      description:'Highly refined carbs are not the best for you and your body as they can increase risks for heart disease, diabetes, stroke and more.'
    },
  ]
  return (
    <section id="Diet" className='bg-white clr-text section-gap'>
        <div className="section-divider">
            <div className="flex flex-col gap-3">
                <Title title={'Diet Plans'} primaryBg={true}/>
                <h4 className='fs-400'>Lorem ipsum dolor sit amet consectetur adipisicing praesentium nulla quod sequi reiciendis.</h4>
                <div className="plans-wrap mt-3">
                    <div className="row">
                      {plansInfo.map((plan) =>{
                        return (<div className="col-12 col-md-4">
                          <Plan image={plan.image} title={plan.title} description={plan.description}/>
                        </div>)
                      })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DietPlan