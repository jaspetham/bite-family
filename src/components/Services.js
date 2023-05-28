import React from 'react'
import './Services.css';
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section id="Services">
        <div className="flex flex-col gap-3">
            <div className="row m-0">
                <div className="col-12 col-md-6 p-0"></div>
                <div className="col-12 col-md-6 p-0">
                    <div className="flex flex-col gap-3 service-wrapper section-gap px-4">
                        <Title title={'Services'} primaryBg={false}/>
                        <h4 className="fs-200">Lorem ipsum dolor sit amet consectetur adipisicing eliteaque earum ex enim!</h4>
                        <div className="mt-3 position-relative">
                            <div className="service-parent">
                                <div className="row m-0">
                                    <div className="col-12 col-md-6">
                                        <div className="service-card">
                                            <div className="flex gap-2">
                                                <FontAwesomeIcon className='fs-400' icon={faLeaf}/>
                                                <div className="card-details">
                                                    <h3 className="text-transform mb-1 fs-100">Branding & Identity</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis minus veritatis. Nemo, tempore possimus?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="service-card">
                                            <div className="flex gap-2">
                                                <FontAwesomeIcon className='fs-400' icon={faLeaf}/>
                                                <div className="card-details">
                                                    <h3 className="text-transform mb-1 fs-100">Branding & Identity</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis minus veritatis. Nemo, tempore possimus?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="service-card">
                                            <div className="flex gap-2">
                                                <FontAwesomeIcon className='fs-400' icon={faLeaf}/>
                                                <div className="card-details">
                                                    <h3 className="text-transform mb-1 fs-100">Branding & Identity</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis minus veritatis. Nemo, tempore possimus?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="service-card">
                                            <div className="flex gap-2">
                                                <FontAwesomeIcon className='fs-400' icon={faLeaf}/>
                                                <div className="card-details">
                                                    <h3 className="text-transform mb-1 fs-100">Branding & Identity</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis minus veritatis. Nemo, tempore possimus?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services