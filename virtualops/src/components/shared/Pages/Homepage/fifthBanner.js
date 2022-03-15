import React from "react";

import "../../Styles/fifthbanner.css";

import fifthImg from "../../images/fifthImg.png";

function FifthBanner() {
  return (
    <>
      <div className="fifthBanner">
        <div className="container-wrapper">
          <div className="fifth-container">
            <div className="fifth-left">
              <h2>One dedicated assistant with extra support</h2>
              <p>
                You get one dedicated Zirtual Assistant to partner up with. You
                don’t have to deal with multiple people, or ever wonder who’s
                doing your work. While most Zirtual Assistants can handle just
                about any administrative task, if there’s something special,
                then your Zirtual Assistant can check in with their manager and
                other assistants for help at any time.
              </p>
            </div>
            <div className="fifth-img-banner">
              <img src={fifthImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FifthBanner;
