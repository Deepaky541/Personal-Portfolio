import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Email from "@iconscout/react-unicons/icons/uil-mailbox"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto:deepaky541.dy@gmail.com">
          <span>Deepaky541.dy@gmail.com</span>
        </a>
        <a href="tel:9891529396">
          <span>Ph: 9891529396</span>
        </a>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/deepaky541">
            {" "}
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Deepaky541">
            {" "}
            <Github color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
