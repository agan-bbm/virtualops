import React from "react";

import "../../Styles/seventhbanner.css";
import firststepimg from "../../images/firststepimg.png";
import secondstepimg from "../../images/secondstepimg.png";
import thirdstepimg from "../../images/thirdstepimg.png";
import fourthstepimg from "../../images/fourthstepimg.png";
import rightarrow from "../../images/rightarrow.png";

function Seventhbanner() {
  return (
    <>
      <div className="seventhbanner">
        <div className="container-wrapper">
          <div className="seventhbanner-content">
            <div className="imagine">
              <button>Imagine going from</button>
            </div>
          </div>
          <div className="seventh-steps">
            '
            <div className="steps-top">
              <div className="single-step">
                <div className="single-step-img">
                  <img src={firststepimg} alt="firststepimg" />
                </div>

                <div className="single-step-paragraph">
                  <p>Too busy to make the right moves</p>
                </div>
              </div>
              <div>
                <img src={rightarrow} alt="rightarrow" />
              </div>
              <div className="single-step">
                <div className="single-step-img">
                  <img src={secondstepimg} alt="secondstepimg" />
                </div>
                <div className="single-step-paragraph">
                  <p>Allocating your time purposefully</p>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <hr className="hr-line" />
            </div>
            <div className="steps-bottom">
              <div className="single-step">
                <div className="single-step-img">
                  <img src={thirdstepimg} alt="thirdstepimg" />
                </div>
                <div className="single-step-paragraph">
                  <p>Not enough helping hands available</p>
                </div>
              </div>
              <div>
                <img src={rightarrow} alt="rightarrow" />
              </div>
              <div className="single-step">
                <div className="single-step-img">
                  <img src={fourthstepimg} alt="fourthstepimg" />
                </div>
                <div className="single-step-paragraph">
                  <p>A dedicated team of virtual assistants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Seventhbanner;
