import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/html.svg";
import Glasses from "../../img/css.svg";
import Humble from "../../img/js.svg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Deepak resume.pdf';
import Github from '../../img/github.svg'
import Mongodb from "../../img/mongodb.svg";
import Expres from "../../img/express.svg";
import expressimg from "../../img/expressimg.png";
import Rct from "../../img/react.svg";
import Rdx from "../../img/redux.svg";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Skills and</span>
        <span>Framework</span>
        <spane>
          <br />
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card emoji={HeartEmoji} heading={"HTML"} />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "25 rem", top: "24rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card emoji={Glasses} heading={"CSS"} />
        </motion.div>

        <motion.div
          initial={{ left: "25rem", top: "12rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card emoji={Humble} heading={"Javascript"} />
        </motion.div>
        <motion.div
          initial={{ left: "25rem", top: "36rem" }}
          whileInView={{ left: "34rem" }}
          transition={transition}
        >
          <Card emoji={Rct} heading={"React"} />
        </motion.div>

        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "34rem" }}
          transition={transition}
        >
          <Card emoji={Github} heading={"Github"} />
        </motion.div>

        <motion.div
          initial={{ left: "25rem", top: "12rem" }}
          whileInView={{ left: "34rem" }}
          transition={transition}
        >
          <Card emoji={Mongodb} heading={"MongoDb"} />
        </motion.div>

        <motion.div
          initial={{ left: "25rem", top: "24rem" }}
          whileInView={{ left: "34rem" }}
          transition={transition}
        >
          <Card emoji={expressimg} heading={"Express"} />
        </motion.div>

        <motion.div
          initial={{ left: "25rem", top: "12rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card emoji={Humble} heading={"Javascript"} />
        </motion.div>

        <motion.div
          initial={{ left: "25rem", top: "36rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card emoji={Rdx} heading={"Redux"} />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        ></motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
