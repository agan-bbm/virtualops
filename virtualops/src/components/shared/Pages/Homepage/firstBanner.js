import React from "react";
import mainbanner from "../../images/mainbanner.png";
import "../../Styles/firstbanner.css";
import userlogo from "../../images/userlogo.png";
import timelogo from "../../images/timelogo.png";
import cuplogo from "../../images/cuplogo.png";

function FirstBanner() {
  return (
    <>
      <div className="firstBanner">
        <div className="container-wrapper">
          <div className="firstbanner-content">
            <div className="text-content">
              <h2 className="main-heading">
                Maximize your workflow. Utilize assistants.
              </h2>
              <p className="main-paragraph">
                We find and train proactive, self-starter virtual assistants who
                are better at the things you don’t even like doing. US based,
                college educated, and ready to work from day 1.
              </p>
              <div className="main-buttons">
                <button className="email">Type your email</button>
                <button className="asistant">
                  Meet your virtual Assistant
                </button>
              </div>
            </div>
            <div className="banner-image"></div>
            <div className="img-content"></div>
          </div>
          <div className="three-features">
            <div className="feature-container" id="time-feature">
              <div className="featue-icons">
                <img src={timelogo} alt="" />
              </div>
              <div className="feature-p">
                <p>Get back hours of your time each week.</p>
              </div>
            </div>
            <div className="feature-container" id="user-feature">
              <div className="featue-icons">
                <img src={userlogo} alt="" />
              </div>
              <div className="feature-p">
                <p>Outsource to trusted virtual assistants</p>
              </div>
            </div>
            <div className="feature-container" id="cup-feature">
              <div className="featue-icons">
                <img src={cuplogo} alt="" />
              </div>
              <div className="feature-p">
                <p>Turn your saved hours into success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FirstBanner;
