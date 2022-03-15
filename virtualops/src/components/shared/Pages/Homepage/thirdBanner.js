import React from "react";

import "../../Styles/thirdbanner.css";

import thirdMap from "../../images/thirdmap.png";

function ThirdBanner() {
  return (
    <>
      <div className="thirdBanner">
        <div className="container-wrapper">
          <div className="third-container">
            <div className="third-left">
              <h2>College educated and US based.</h2>
              <p>
                All of our virtual assistants live in the United States and have
                a college education. They have administrative experience and
                know how to serve their clients online.
              </p>
            </div>
            <div className="third-img-banner">
              <img src={thirdMap} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ThirdBanner;
