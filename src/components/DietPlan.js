import React from 'react'
import './DietPlan.css'
import Title from './Title'
import Plan from './Plan'

import dietPlan1 from '../assets/diet-plan1.svg'
import dietPlan2 from '../assets/diet-plan2.svg'
import dietPlan3 from '../assets/diet-plan3.svg'
import pdf from '../assets/info.pdf'


function DietPlan() {
  let plansInfo = [
    {
      image:dietPlan1,
      title:'BITE’s Ketogenic Diet',
      description:'Our very own version of the popular Ketogenic Diet. We’ve extensively modified the diet to ensure safe weight loss without the drawbacks of a conventional Ketogenic Diet. [Top Demand]',
      pdfLink:pdf
    },
    {
      image:dietPlan2,
      title:'BITE’s Carb-Safe Diet',
      description:'Highly refined carbs are not the best for you and your body as they can increase risks for heart disease, diabetes, stroke and more.',
      pdfLink:pdf
    },
    {
      image:dietPlan3,
      title:'BITE’s Gout-Aid Diet',
      description:'Gout is the bane of many Malaysians and we know that the best way to combat gout is through a diet tailored specifically to combat gout.',
      pdfLink:pdf
    },
  ]
  return (
    <section id="Diet" className='bg-white clr-text section-gap'>
        <div className="section-divider px-3">
            <div className="flex flex-col gap-3">
                <Title title={'Diet Plans'} primaryBg={true}/>
                <h4 className='fs-400'>Lorem ipsum dolor sit amet consectetur adipisicing praesentium nulla quod sequi reiciendis.</h4>
                <div className="plans-wrap mt-3">
                    <div className="row mx-0 gap-y-5 flex-md-nowrap">
                      {plansInfo.map((plan, index) =>{
                        return (<div key={index} className="col-12 col-md-4">
                          <Plan image={plan.image} title={plan.title} description={plan.description} pdfLink={plan.pdfLink}/>
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