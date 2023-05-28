import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import Title from './Title'
import PortfolioImg from './PortfolioImg';
import PortfolioFilter from './PortfolioFilter';
import { motion, AnimatePresence } from 'framer-motion';

function Portfolio() {
    const [portfolios, setPortfolios] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);

    const imgs = [
        {
            title:"The Lazy Artist Gallery",
            subtitle:"lorem10",
            tag:1,
            src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/1.jpg?raw=true"
        },
        {
            title:"Daria Shevtsova",
            subtitle:"lorem10",
            tag:2,
            src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true"
        },
        {
            title:"Kasuma",
            subtitle:"lorem10",
            tag:3,
            src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true"
        },
        {
            title:"Dominika Roseclay",
            subtitle:"lorem10",
            tag:4,
            src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true"
        },
        {
            title:"Scott Webb",
            subtitle:"lorem10",
            tag:4,
            src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true"
        },
        {
            title:"Jeffrey Czum",
            subtitle:"lorem10",
            tag:1,
            src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true"
        },
        {
            title:"Dominika Roseclay",
            subtitle:"lorem10",
            tag:2,
            src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true"
        },
        {
            title:"Valeria Boltneva",
            subtitle:"lorem10",
            tag:3,
            src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true"
        }
    ];

    const updatePortfolio = () =>{
        setPortfolios(imgs);
        setFiltered(imgs);
    }
    useEffect(()=>{
        updatePortfolio();
    },[]);

    return (
        <section id="Portfolio" className='bg-white clr-text section-gap'>
            <div className="section-divider px-3">
                <div className="flex flex-col gap-3">
                    <Title title={'Portfolio'} primaryBg={true}/>
                    <h4 className='fs-400'>Lorem ipsum dolor sit amet consectetur adipisicing praesentium nulla quod sequi reiciendis.</h4>
                    <div className="portfolios-wrapper mt-4">
                        <PortfolioFilter portfolios={portfolios} setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        <motion.div 
                            layout 
                            className="portfolios mt-4"
                        >
                            <AnimatePresence>
                                {filtered.map((img, index)=>{
                                    return <PortfolioImg img={img} key={index}/>
                                })}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
    }

export default Portfolio