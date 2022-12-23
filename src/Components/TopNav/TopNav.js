import React from 'react'
import "./TopNav.css"
function TopNav() {
  return (
    <div>
        <div className="container-fluid TopNav text-center">
            <div className="row">
            <div className="col-6">
            <div className="topnav-left">
        <i class="fa fa-envelope-o" aria-hidden="true"></i><span>info@gmail.com</span>
      <i class="fa fa-phone" aria-hidden="true"></i> <span >92+(305)2345569</span>
        </div>
            </div>
            <div className="col-6">
            <div className='topnav-right ms-auto'>
      <i class="fa fa-twitter p-1" aria-hidden="true"></i><span>Twitter</span>
      <i class="fa fa-facebook p-1" aria-hidden="true"></i><span>FaceBook</span>

      </div>
            </div>
            </div>  
      
        </div>
    </div>
  )
}

export default TopNav
