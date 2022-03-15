import React from "react";

import "../../Styles/focusbanner.css";

function FocusBanner() {
  return (
    <>
      <div className="focusBanner">
        <div className="container-wrapper">
          <div className="focusBanner-container">
            <h2>Focus your time into what you do best</h2>
            <p>Meet the Virtual Assistant who will support you</p>
            <div className="focusButtons">
              <div className="consultationBtn">
                <button>Request a Consultation</button>
              </div>
              <div className="plansBtn">
                <button>View plans and pricing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FocusBanner;
