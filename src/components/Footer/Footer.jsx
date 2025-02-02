import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left Side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people the best place to live for them.
          </span>
        </div>

        {/* Right Side */}
        <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">145 Kolkata, WB, India</span>

            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>
            </div>
        </div>
      </div>
      <div className="flexCenter orangeText">Made with ❤️ by Ankit Kumar</div>
    </section>
  );
};

export default Footer;
