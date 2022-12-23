import React from 'react'
import "../../Components/Features/Feature.css"
import sea from "../../Images/jahaz.jpg"
function Feature() {
  return (
    <div>
       <div className="container-fluid my-5 pb-5 mt-5 pt-5">
       <div className="row px-5 mx-5 mt-5 daf">
       <div className="col-6 col-sm-12 col-lg-6 col-xs-12 dos">
        <div className="row">
                <div className="col-12"><h3>Why Us</h3></div>
            </div>
            <div className="row">
            <div className="col-12"><h5>We Work Quickly & efficiently</h5></div>
            </div>
            <div className="row">
                <div className="col-12 "><p className='faq-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque unde aut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, nesciunt.</p></div>
            </div>
            <div className="row">
            <div className="col-12">
            <ul className='price-ul'>
            <li className='price-li'><i class="fas-fa fa fa-check p-2" aria-hidden="true"></i>Lorem ipsum dolor sit</li>
            <li className='price-li'><i class="fas-fa fa fa-check p-2" aria-hidden="true"></i>Lorem ipsum dolor sit</li>
            <li className='price-li'><i class="fas-fa fa fa-check p-2" aria-hidden="true"></i>Lorem ipsum dolor sit</li>
            <li className='price-li'><i class="fas-fa fa fa-check p-2" aria-hidden="true"></i>Lorem ipsum dolor sit</li>
            <li className='price-li'><i class="fas-fa fa fa-check p-2" aria-hidden="true"></i>Lorem ipsum dolor sit</li>
            <li className='price-li'><i class="fas-fa fa fa-check p-2" aria-hidden="true"></i>Lorem ipsum dolor sit</li>
           </ul>
            </div>
           
            </div>
            </div>
            <div className="col-6 col-sm-12 col-lg-6 doc col-xs-12">
                <img src={sea} alt="" srcset="" height={400} width={350} />
            </div>
            </div>
        </div>
   
       </div>
   
   
  )
}

export default Feature
