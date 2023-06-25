import React from 'react'
import './Team.css';
import Title from './Title';
const teams=[
  {
    name: 'Kington Lee',
    position:'The Engineer',
    shortIntro:'BITE Family’s R&D Department For Kitchen Hardwares',
    image:"https://picsum.photos/500/500?image=1050"
  },
  {
    name: 'Kent Wong',
    position:'The Culinarian',
    shortIntro:'Extensive Experience In Hotels & Restaurants',
    image:"https://picsum.photos/500/500?image=206"
  },
  {
    name: 'David Lee',
    position:'The Culinarian',
    shortIntro:'Extensive Experience In Hotels & Restaurants',
    image:"https://picsum.photos/500/500?image=906"
  },
]
function Team() {
  return (
    <section id="Team" className='bg-white clr-text section-gap'>
      <div className="section-divider px-3">
        <div className="flex flex-col gap-3">
          <Title title={'Meet Our Team'} primaryBg={true}/>
            <div className="row">
              {teams.map((team, i) => (
                <div key={i} className="col-md-4 col-12">
                  <div className="team">
                    <img
                      alt={team.name}
                      src={team.image}
                    />
                    <div className="team-detail p-3 text-white">
                      <p className="fs-300 ff-bold">{team.name}</p>
                      <p className="fs-100 ff-semi">{team.position}</p>
                      <p className="fs-200">{team.shortIntro}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Team