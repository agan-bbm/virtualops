import React from "react";

import "../../Styles/getstarted.css";
import nrone from "../../images/nrone.svg";
import gsrimg from "../../images/gsrimg.png";
import nrtwo from "../../images/nrtwo.svg";
import nrthree from "../../images/nrthree.svg";
import nrfour from "../../images/nrfour.svg";
function Getstarted() {
  return (
    <>
      <div className="getstartedbanner">
        <div className="container-wrapper">
          <div className="getstartedbanner-content">
            <div className="getstarted">
              <div className="getstarted-left">
                <div className="getstarted-left-content">
                  <h2 className="getstarted-heading">Let’s get started</h2>
                  <div className="gtst-onestep">
                    <img src={nrone} alt="nrone" /> <p>Talk to us</p>
                  </div>
                  <div className="gtst-onestep">
                    <img src={nrtwo} alt="nrtwo" /> <p>Get expertly matched</p>
                  </div>
                  <div className="gtst-onestep">
                    <img src={nrthree} alt="nrthree" />
                    <p>
                      Meet your Virtual Assistant during the strategy call with
                      your account manager
                    </p>
                  </div>
                  <div className="gtst-onestep">
                    <img src={nrfour} alt="nrfour" />
                    <p>Get results in just 1 week</p>
                  </div>
                </div>
              </div>
              <div className="getstarted-right">
                <div className="getstarted-right-img">
                  <img src={gsrimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Getstarted;
