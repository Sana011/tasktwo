import React from "react";
import "../../Components/Footer/Footer.css";
function Footer() {
  return (
    <div>
      <div className="container-fluid footer-con">
        <div className="footer">
          <div className="footer-1">
            <h4 className=" footer-heading">About Us</h4>
            <p className=" footer-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              iste obcaecati laborum mollitia?
            </p>
          </div>
          <div className="footer-1">
            <h4 className=" Features-heading">Features</h4>
            <ul className="footer-ul">
              <li className="footerli">ABOUT</li>
              <li className="footerli">ABOUT</li>
              <li className="footerli">ABOUT</li>
              <li className="footerli">ABOUT</li>
              <li className="footerli">ABOUT</li>
            </ul>
          </div>
          <div className="footer-1">
            <h4 className=" sub-heading">Subscribe</h4>
            <form id="form">
                <div className="sb">
                <input type="search"  id="query"name="q" placeholder="Search..."/>
                <button className="sub-btn">Subscribe</button>
                </div>
      
              <p className="fu">Follow us</p>
              <div className="soc-link">
                <i class="qs fa fa-quora" aria-hidden="true"></i>
                <i class="qs fa fa-quora" aria-hidden="true"></i>
                <i class="qs fa fa-quora" aria-hidden="true"></i>
                <i class="qs fa fa-quora" aria-hidden="true"></i>
              </div>
            </form>
          </div>
          
        </div>
        <div className="cpyright">
          All Rights Are Reserved By Copy Rights
        </div>
      </div>
    </div>
  );
}

export default Footer;
