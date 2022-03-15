import React from "react";
import facebookLogo from "../images/facebookLogo.svg";
import instagramLogo from "../images/instagramLogo.svg";
import twitterLogo from "../images/twitterLogo.svg";
import linkedinLogo from "../images/linkedinLogo.svg";
import footerLogo from "../images/logooinbox.png";

import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-wrapper">
          <div className="footer-content">
            <div className="footerLogo">
              <img src={footerLogo} alt="" />
            </div>
            <div className="footer-list-container">
              <div className="footer-links">
                <div className="footer-about-links">
                  <h2>ABOUT US</h2>
                  <li>Success Stories</li>
                  <li>Refer & Earn</li>
                  <li> Work for VirtualOps</li>
                </div>
              </div>
              <div className="footer-links">
                <h2>CONNECT WITH US</h2>
                <div className="footer-connect-links">
                  <li>Support</li>
                  <li>Sales</li>
                  <li></li>
                </div>
              </div>
              <div className="footer-links">
                <h2>RESOURCES</h2>
                <div className="footer-resources-links">
                  <li>VirtualOps Partners</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                </div>
              </div>
              <div className="footer-links">
                <h2>LEGAL</h2>
                <div className="footer-legal-links">
                  <li>Privacy Policy</li>
                  <li>Terms of Servive</li>
                  <li>Security</li>
                </div>
              </div>
              <div className="footer-links">
                <h2>FOLLOW</h2>
                <div className="footer-follow-links">
                  <li>
                    <img src={facebookLogo} alt="" />
                  </li>
                  <li>
                    <img src={instagramLogo} alt="" />
                  </li>
                  <li>
                    <img src={linkedinLogo} alt="" />
                  </li>
                  <li>
                    <img src={twitterLogo} alt="" />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2022 VirtualOps. All rights reserved.</p>
      </div>
    </>
  );
}
export default Footer;
