import React from "react";

import "../../Styles/sixthbanner.css";
import profilepic from "../../images/profilepic1.png";
function SixthBanner() {
  return (
    <>
      <div className="sixthBanner">
        <div className="container-wrapper">
          <div className="sixth-container">
            <div className="cards">
              <div className="single-card">
                <div className="card-comment">
                  <p>
                    “Gresa has ramped up quickly to become an indispensable
                    member of our team. She's fast to respond, learns quickly,
                    and adapts at lightning speed to the needs of our company.
                    She's seamlessly integrated herself into our team and
                    magically taken on lots of responsibilities, which has freed
                    up our time to tackle other priorities that we were never
                    quite able to get to before she came along.”
                  </p>
                </div>
                <div className="card-person-profile">
                  <div className="card-img">
                    <img src={profilepic} alt="" />
                  </div>
                  <div className="card-person-description">
                    <h4>Ardit Sheholli</h4>
                    <p>BlackBird Marketing</p>
                  </div>
                </div>
              </div>
              <div className="single-card">
                <div className="card-comment">
                  <p>
                    “Gresa has ramped up quickly to become an indispensable
                    member of our team. She's fast to respond, learns quickly,
                    and adapts at lightning speed to the needs of our company.
                    She's seamlessly integrated herself into our team and
                    magically taken on lots of responsibilities, which has freed
                    up our time to tackle other priorities that we were never
                    quite able to get to before she came along.”
                  </p>
                </div>
                <div className="card-person-profile">
                  <div className="card-img">
                    {" "}
                    <img src={profilepic} alt="" />
                  </div>
                  <div className="card-person-description">
                    <h4>Ardit Sheholli</h4>
                    <p>BlackBird Marketing</p>
                  </div>
                </div>
              </div>
              <div className="single-card">
                <div className="card-comment">
                  <p>
                    “Gresa has ramped up quickly to become an indispensable
                    member of our team. She's fast to respond, learns quickly,
                    and adapts at lightning speed to the needs of our company.
                    She's seamlessly integrated herself into our team and
                    magically taken on lots of responsibilities, which has freed
                    up our time to tackle other priorities that we were never
                    quite able to get to before she came along.”
                  </p>
                </div>
                <div className="card-person-profile">
                  <div className="card-img">
                    <img src={profilepic} alt="" />
                  </div>
                  <div className="card-person-description">
                    <h4>Ardit Sheholli</h4>
                    <p>BlackBird Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SixthBanner;
