import React from "react";

import "../../Styles/secondbanner.css";

import dataentry from "../../images/data-entry.png";
import calendarmanagement from "../../images/calendar-management.png";
import virtualassistant from "../../images/virtual-assistant.png";
import websupport from "../../images/web-support.png";
import customersupport from "../../images/customer-support.png";

function SecondBanner() {
  return (
    <>
      <div className="secondBanner">
        <div className="container-wrapper">
          <div className="secondbanner-content">
            <div className="secondbanner-text">
              <h2>Why having a virtual assistant is life changing?</h2>
              <p>
                VirtualOps assistants have the top administrative skills and
                know all the best tools to help you kick your project off the
                ground.
              </p>
            </div>
            <div className="five-skills">
              <div className="skills">
                <div className="icon-wrapper">
                  <img src={dataentry} alt="" />
                </div>
                <div className="icon-text">
                  <p>Data Entry</p>
                </div>
              </div>
              <div className="skills">
                <div className="icon-wrapper">
                  <img src={calendarmanagement} alt="" />
                </div>

                <div className="icon-text">
                  <p>Calendar Management</p>
                </div>
              </div>
              <div className="skills">
                <div className="icon-wrapper">
                  <img src={virtualassistant} alt="" />
                </div>

                <div className="icon-text">
                  <p>Executive Personal Assistant</p>
                </div>
              </div>
              <div className="skills">
                <div className="icon-wrapper">
                  <img src={websupport} alt="" />
                </div>

                <div className="icon-text">
                  <p>Web Maintenance Support</p>
                </div>
              </div>
              <div className="skills">
                <div className="icon-wrapper">
                  <img src={customersupport} alt="" />
                </div>

                <div className="icon-text">
                  <p>Customer Service</p>
                </div>
              </div>
            </div>
            <div className="plans-button">
              <button>View our monthly plans</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SecondBanner;
