import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <div className="container-fluid contct-div">
        <h1 className="text-center offer-heading pt-3">Contact Us</h1>
        <p className="text-center ">
          Lorem ipsum dolor sit, amet consectetur{" "}
        </p>
        <div className="row complet-form">
          <div className="col-6 left-contct-rw p-5">
            <div className="row">
              <div className="col-6">
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter Name"
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5" placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button type="submit" class="Btn btn btn-primary mb-2 mt-3 px-5">
              Submit
            </button>
          </div>
          {/* right */}
          <div className="col-6 row rigt-con ">
            <div>
              <div className="col-6">
                <h4>Contact Us</h4>
             
                <p>Street No 1122 sxasx</p>
                <p>Street No 1122 sxasx</p>
                
                <p>+12 3343445657</p>
                <h6>Email</h6>
                <p>ahdsa@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
