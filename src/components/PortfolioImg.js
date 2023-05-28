import React from 'react'
import { motion } from 'framer-motion'

function PortfolioImg({img}) {
  return (
    <motion.div 
      animate={{opacity:1, scale:1}} 
      initial={{opacity:0, scale:0.5}} 
      exit={{opacity:0, scale:0.5}}
      transition={{ duration: 0.45}}
      layout
    >
      <div className="position-relative portfolio landscape">
        <img src={img.src} alt={img.alt} />
        <div className="details">
          <h4 className='fs-300'>{img.title}</h4>
          <p className='fs-200'>{img.subtitle}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioImg