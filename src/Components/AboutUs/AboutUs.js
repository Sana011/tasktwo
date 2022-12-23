import React from 'react'
import "../../Components/AboutUs/AboutUs.css"
import cardboard from"../../Images/cardboard.jpg";
function AboutUs() {
  return (
    <div>
              <h1 className='text-center about-heading'>ABOUT US</h1>
        <p className='text-center mb-5 pb-5 about-para'>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor <br /> sit amet consectetur. </p>
        <div className="container-fluid delvry-section my-5 py-5">
          <div className="icon-play">
          <i class="fa fa-play fas-play fa-1x" aria-hidden="true"></i>
          </div>
      
            <div className="parsecl-section">
                <img src={cardboard} alt="" srcset="" />
            </div>
            <div className="counter pt-5">
            <div className="counter-num"><h1>500+</h1>
            <hr  className='botom'/>
            <p>Year Of Experien</p>
            </div>
            <div className="counter-num"><h1>500+</h1>
            <hr  className='botom'/>
            <p>Year Of Experien</p>
            </div>
            <div className="counter-num"><h1>500+</h1>
            <hr  className='botom'/>
            <p>Year Of Experien</p>
            </div>
            <div className="counter-num"><h1>500+</h1>
            <hr  className='botom'/>
            <p>Year Of Experien</p>
            </div>
            <div className="counter-num"><h1>500+</h1>
            <hr  className='botom'/>
            <p>Year Of Experien</p>
            </div>

    
           
            </div>
        </div>

      
    </div>
  )
}

export default AboutUs
