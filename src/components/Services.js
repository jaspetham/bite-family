import React from 'react'
import './Services.css';
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlateWheat, faSeedling, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section id="Services">
        <div className="flex flex-col gap-3">
            <div className="row m-0">
                <div className="col-12 col-md-6 p-0"></div>
                <div className="col-12 col-md-6 p-0">
                    <div className="flex flex-col gap-3 service-wrapper section-gap px-4">
                        <Title title={'Services'} primaryBg={false}/>
                        <h4 className="fs-200">How We Do What We Do</h4>
                        <div className="mt-3 position-relative">
                            <div className="service-parent">
                                <div className="row m-0">
                                    <div className="col-12 col-md-6">
                                        <div className="service-card">
                                            <div className="flex gap-2">
                                                <FontAwesomeIcon className='fs-400' icon={faUser}/>
                                                <div className="card-details">
                                                    <h3 className="text-transform mb-1 fs-100">Tailored For You</h3>
                                                    <p>Your meals are tailored to your body’s needs head to toe. Each meal is perfectly calculated to meet your macro-nutrition to help you achieve your health goals. Adjusted weekly to your weight.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="service-card">
                                            <div className="flex gap-2">
                                                <FontAwesomeIcon className='fs-400' icon={faSeedling}/>
                                                <div className="card-details">
                                                    <h3 className="text-transform mb-1 fs-100">Fresh Produce Delivered Fresh</h3>
                                                    <p>We only use produce purchased on the day we prepare your meals.The ingredient makes the dish and we believe that only the freshest ingredients should be in your meals.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="service-card">
                                            <div className="flex gap-2">
                                                <FontAwesomeIcon className='fs-400' icon={faPlateWheat}/>
                                                <div className="card-details">
                                                    <h3 className="text-transform mb-1 fs-100">Fresh Meals, Fast, Never Frozen</h3>
                                                    <p>Every meal that leaves our kitchen are never frozen and are ready to eat within 1 to 2 minutes. Delicious meals, crafted with care and fast to reheat for a hassle-free day.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="service-card">
                                            <div className="flex gap-2">
                                                <FontAwesomeIcon className='fs-400' icon={faUserTie}/>
                                                <div className="card-details">
                                                    <h3 className="text-transform mb-1 fs-100">Reachable Consultancy & Advisory</h3>
                                                    <p>Our professionals are available to you daily! We’ll be with you through your journey at every step and to help you with consultancy & advisory to keep you on track at every turn!</p>
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