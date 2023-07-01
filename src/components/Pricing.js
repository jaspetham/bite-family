import React from 'react'
import './Pricing.css'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Pricing() {
    const planInfos = [
        {
            title:'Healthy Eating',
            subTitle:'Better Carbohydrates For A Better Life',
            price:'65',
            isRecommend:false,
            benefits:[
                '2-3 meals/ day (your requirements)',
                '1x Free Consultancy Per Week',
                'Free Dietary Advisory',
                '10% Off On Our Ala-Carte Items'
            ],
            linkTitle:'Sign Up',
            linkHref:'#',
            isSmaller: true
        },
        {
            title:'Ketogenic Diet',
            subTitle:'Perfect For Rapid Weight Loss',
            price:'65',
            isRecommend:true,
            benefits:[
                '2-3 meals/ day (your requirements)',
                '1x Free Consultancy Per Week',
                'Free Dietary Advisory',
                '10% Off On Our Ala-Carte Items'
            ],
            linkTitle:'Sign Up',
            linkHref:'#'
        },
        {
            title:'Premium Diet',
            subTitle:'A Luxurious Dieting Experience',
            price:'120',
            isRecommend:false,
            benefits:[
                '2-3 meals/ day (your requirements)',
                '2x Free Consultancy Per Week',
                'Free Dietary Advisory',
                '15% Off On Our Ala-Carte Items'
            ],
            linkTitle:'Sign Up',
            linkHref:'#',
            isSmaller:true
        },
    ]
  return (
    <section id="Pricing" className='text-white clr-text section-gap'>
        <div className="section-divider px-3">
            <div className="flex flex-col gap-3">
                <Title title={'Pricing'} primaryBg={false}/>
                <div className="plan-wrapper mt-5">
                    <div className="row">
                        {planInfos.map((plan,index) =>{
                            return(
                                <div key={index} className="col-md-4 col-12">
                                    <div className={plan.isSmaller ? 'scale-90' : ''}>
                                        <div className="plan text-center bg-white rounded-2 clr-text p-4">
                                            <div className="plan-title flex flex-col gap-2 justify-center text-uppercase">
                                                {plan.isRecommend ? <FontAwesomeIcon className='fs-100' icon={faStar}/> : ''}
                                                <h2 className="fs-300">{plan.title}</h2>
                                                {plan.isRecommend ? <h2 className='fs-100'>Best Seller</h2> : ''}
                                            </div>
                                            <hr />
                                            <div className="price ff-semi my-4">
                                                <p className="ff-bold fs-200">{plan.subTitle}</p>
                                                <span className="fs-500 currency align-top">RM</span>
                                                <span className="fs-800">{plan.price}</span>
                                                <span className="fs-300">/day</span>
                                            </div>
                                            <div className="flex flex-col gap-1 fs-200 ff-reg mb-5">
                                                {plan.benefits.map((benefit,index) =>{
                                                    return <p key={index}>{benefit}</p>
                                                })}
                                            </div>
                                            <a href={plan.linkHref} className="btn-classic color btn-100 fs-200 my-3 mx-auto ff-reg">{plan.linkTitle}</a>
                                        </div>
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