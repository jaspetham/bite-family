import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import Title from './Title'
import PortfolioImg from './PortfolioImg';
import PortfolioFilter from './PortfolioFilter';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function Portfolio() {
    const [portfolios, setPortfolios] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    
    useEffect(()=>{
        const imgs = [
            {
                title:"Test",
                subtitle:"lorem10",
                tag:2,
                src:"https://picsum.photos/400/450?image=1050",
            },
            {
                title:"The Lazy Artist Gallery",
                subtitle:"lorem10",
                tag:1,
                src:"https://picsum.photos/700/450?image=100"
            },
            {
                title:"Daria Shevtsova",
                subtitle:"lorem10",
                tag:2,
                src:"https://picsum.photos/200/300?image=230"
            },
            {
                title:"Kasuma",
                subtitle:"lorem10",
                tag:3,
                src:"https://picsum.photos/400/300?image=132"
            },
            {
                title:"Dominika Roseclay",
                subtitle:"lorem10",
                tag:4,
                src:"https://picsum.photos/400/300?image=140"
            },
            {
                title:"Scott Webb",
                subtitle:"lorem10",
                tag:4,
                src:"https://picsum.photos/400/400?image=420"
            },
            {
                title:"Jeffrey Czum",
                subtitle:"lorem10",
                tag:1,
                src:"https://picsum.photos/300/200?image=169"
            },
            {
                title:"Dominika Roseclay",
                subtitle:"lorem10",
                tag:2,
                src:"https://picsum.photos/400/300?image=423"
            },
            {
                title:"Valeria Boltneva",
                subtitle:"lorem10",
                tag:3,
                src:"https://picsum.photos/600/400?image=92"
            }
        ];
        setPortfolios(imgs);
        setFiltered(imgs);
    },[]);

    return (
        <section id="Portfolio" className='bg-white clr-text section-gap'>
            <div className="flex flex-col gap-3">
                <div className="section-divider px-3">
                    <div className="mb-4">
                        <Title title={'Portfolio'} primaryBg={true}/>
                        <h4 className='fs-400'>Lorem ipsum dolor sit amet consectetur adipisicing praesentium nulla quod sequi reiciendis.</h4>
                    </div>
                    <PortfolioFilter portfolios={portfolios} setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                </div>
                <div className="portfolios-wrapper mt-4">
                    <motion.div 
                        layout 
                        className="portfolios"
                    >
                        <AnimatePresence>
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                            >
                                <Masonry columnsCount={4}>
                                    {filtered.map((img, index)=>{
                                        return <PortfolioImg img={img} key={index}/>
                                    })}
                                </Masonry>
                            </ResponsiveMasonry>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    )
    }

export default Portfolio