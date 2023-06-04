import React from 'react'
import './Team.css';
import Title from './Title';

function Team() {
  return (
    <section id="Team" className='bg-white clr-text section-gap'>
      <div className="section-divider px-3">
        <div className="flex flex-col gap-3">
          <Title title={'Meet Our Team'} primaryBg={true}/>
        </div>
      </div>
    </section>
  )
}

export default Team