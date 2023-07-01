import React from 'react'
import './Stats.css';
import Title from './Title';
const stats=[
  {
    name: 'Total Weight Loss',
    shortIntro:'268KG',
  },
  {
    name: 'It’s That Easy With Us!',
    shortIntro:'> 90% Success Rate',
  },
  {
    name: 'Variety Is Our Pride!',
    shortIntro:'Over 384 Recipes Served',
  },
  {
    name: 'Your Goals Comes Before Holidays!',
    shortIntro:'0 Missed Delivery Dates',
  },
]
function Stats() {
  return (
    <section id="Stats" className='bg-white clr-text section-gap'>
      <div className="section-divider px-3">
        <Title title={'Stats'} primaryBg={true}/>
        <div className="row m-0">
          <div className="col-md-4 col-12 p-2">
            <div className="flex items-center h-full">
              <h1 className="fs-500">We've helped over 90% people reached their fitness goal in the first year with us</h1>
            </div>
          </div>
          <div className="col-md-8 col-12 p-2">
            <div className="flex flex-col gap-3">
                <div className="row m-0">
                  {stats.map((stat, i) => (
                    <div key={i} className="col-md-6 col-12 p-1">
                      <div className="team text-center">
                        <div className="team-detail py-5 px-3 text-white">
                          <p className="fs-400 ff-bold">{stat.shortIntro}</p>
                          <p className="fs-200">{stat.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats