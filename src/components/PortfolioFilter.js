import React, { useEffect } from 'react'

function PortfolioFilter({portfolios, setFiltered, activeCategory, setActiveCategory}) {

  useEffect(() =>{
    if(activeCategory === 0){
      setFiltered(portfolios);
      return;
    }
    const filtered = portfolios.filter((portfolio) => portfolio.tag === activeCategory);
    setFiltered(filtered);
  },[activeCategory, portfolios, setFiltered])
  
  return (
    <div className="portfolio-filter">
        <button onClick={() => setActiveCategory(0)} className={activeCategory === 0 ? "active" : ""}>All</button>
        <button onClick={() => setActiveCategory(1)} className={activeCategory === 1 ? "active" : ""}>People</button>
        <button onClick={() => setActiveCategory(2)} className={activeCategory === 2 ? "active" : ""}>Animal</button>
    </div>
  )
}

export default PortfolioFilter