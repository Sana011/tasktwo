import React from "react";
import "../../Components/Clients/Clients.css";
import teamS from "../../Images/teamjpg.jpg";
function Clients() {
  return (
    <div> 
      <div className="container-fluid offer-con my-5 py-5">
        <h1 className="text-center offer-heading">Happy Clients</h1>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur{" "}
        </p>
        <div className="happy-clients mb-5">
          <div className="clients-card-1 ">
            <p className=" offer-card-para p-4 bg-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              iste obcaecati laborum mollitia? Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet..
            </p>
            <div className="card-img">
              <img
                src={teamS}
                alt=""
                srcset=""
                width={30}
                className="team-img"
              />
                   <h6 className="text-center">kalvin</h6>
            </div>
          </div>
          <div className="clients-card-1 ">
            <p className=" offer-card-para p-4 bg-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              iste obcaecati laborum mollitia? Lorem ipsum dolor sit amet Lorem
            
            </p>
            <div className="card-img">
              <img
                src={teamS}
                alt=""
                srcset=""
                width={30}
                className="team-img"
              />
                   <h6 className="text-center">kalvin</h6>
            </div>
          </div>
           <div className="clients-card-1 ">
            <p className=" offer-card-para p-4 bg-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              iste obcaecati laborum mollitia? Lorem 
            </p>
            <div className="card-img">
              <img
                src={teamS}
                alt=""
                srcset=""
                width={30}
                className="team-img"
              />
              <h6 className="text-center">kalvin</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
