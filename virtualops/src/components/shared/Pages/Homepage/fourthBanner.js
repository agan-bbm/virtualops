import React from "react";

import "../../Styles/fourthbanner.css";

import fourthImg from "../../images/fourthImg.png";

function FourthBanner() {
  return (
    <>
      <div className="fourthBanner">
        <div className="container-wrapper">
          <div className="fourth-container">
            <div className="fourth-img-banner">
              <img src={fourthImg} alt="" />
            </div>
            <div className="fourth-right">
              <h2>Ready to jump right in.</h2>
              <p>
                Based on their existing skills, experience, and interests, we
                train our assistants even further in what clients need. With
                ongoing training on different tools and tasks, our Zirtual
                Assistants are ready to get to work. Plus, they’re experts in
                making outsourcing easy, not overwhelming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FourthBanner;
