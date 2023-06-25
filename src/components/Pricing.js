import React from 'react'
import './Pricing.css'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Pricing() {
    const planInfos = [
        {
            title:'Basic',
            price:'20',
            isRecommend:false,
            benefits:[
                'Full Access',
                'Unlimited Pizza',
                'Free Bear',
                '2 free cookies'
            ],
            linkTitle:'Sign Up',
            linkHref:'#'
        },
        {
            title:'Basic',
            price:'20',
            isRecommend:true,
            benefits:[
                'Full Access',
                'Unlimited Pizza',
                'Free Bear',
                '2 free cookies'
            ],
            linkTitle:'Sign Up',
            linkHref:'#'
        },
        {
            title:'Pro',
            price:'30',
            isRecommend:false,
            benefits:[
                'Full Access',
                'Unlimited Pizza',
                'Free Bear',
                '2 free cookies'
            ],
            linkTitle:'Sign Up',
            linkHref:'#'
        },
    ]
  return (
    <section id="Pricing" className='text-white clr-text section-gap'>
        <div className="section-divider px-3">
            <div className="flex flex-col gap-3">
                <Title title={'Plan'} primaryBg={false}/>
                <h2 className="fs-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, nesciunt?</h2>
                <div className="plan-wrapper mt-5">
                    <div className="row">
                        {planInfos.map((plan,index) =>{
                            return(
                                <div key={index} className="col-md-4 col-12">
                                    <div className="plan text-center bg-white rounded-2 clr-text p-4">
                                        <div className="plan-title flex flex-col gap-2 justify-center text-uppercase">
                                            {plan.isRecommend ? <FontAwesomeIcon className='fs-100' icon={faStar}/> : ''}
                                            <h2 className="fs-300">{plan.title}</h2>
                                            {plan.isRecommend ? <h2 className='fs-100'>Recommend</h2> : ''}
                                        </div>
                                        <hr />
                                        <div className="price ff-semi my-4">
                                            <span className="fs-500 currency align-top">$</span>
                                            <span className="fs-800">{plan.price}</span>
                                        </div>
                                        <div className="flex flex-col gap-1 fs-200 ff-reg mb-5">
                                            {plan.benefits.map((benefit,index) =>{
                                                return <p key={index}>{benefit}</p>
                                            })}
                                        </div>
                                        <a href={plan.linkHref} className="btn-classic color btn-100 fs-200 my-3 mx-auto ff-reg">{plan.linkTitle}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing