import React from 'react'
import aroplan from "../../Images/crd.png"
import "./HeroCard.css"
function HeroCard() {
  return (
    <div>
      <div className="heroCards">
      <div className="herocard-1">
            <img src={aroplan} alt="" srcset="" />
            <h4 className='text-center hero-crd-heading'>Sea Fort</h4>
            <p className='text-center hero-card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste obcaecati laborum mollitia?</p>
        </div>
        <div className="herocard-1">
            <img src={aroplan} alt="" srcset="" />
            <h4 className='text-center hero-crd-heading'>Sea Fort</h4>
            <p className='text-center hero-card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste obcaecati laborum mollitia?</p>
        </div>
        <div className="herocard-1">
            <img src={aroplan} alt="" srcset="" />
            <h4 className='text-center hero-crd-heading'>Sea Fort</h4>
            <p className='text-center hero-card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste obcaecati laborum mollitia?</p>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
