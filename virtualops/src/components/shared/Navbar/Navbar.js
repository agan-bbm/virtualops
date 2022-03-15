import React from "react";

import "./navbar.css";
import logo from "../images/logo.svg";
import userLogo from "../images/userlogo.png";
import Hamburger from "hamburger-react";
function Navbar() {
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <Hamburger
            size={20}
            color={"white"}
            onToggle={(toggled) => {
              if (toggled) {
              } else {
              }
            }}
          />
          <div className="menu"></div>
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="nav-links">
            <ul>
              <li>Who we are</li>
              <li>Who we serve</li>
              <li>What we do</li>
              <li>FAQs</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="login-forms">
            <div className="login">Login</div>
            <div className="consultation">
              <button>Request a consultation</button>
            </div>
          </div>
          <div className="userLogo">
            <img src={userLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
