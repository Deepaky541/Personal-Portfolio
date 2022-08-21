import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/tanishq.png";
import Ecommerce from "../../img/orbitz1.png";
import { themeContext } from "../../Context";
import game  from "../../img/game.png";
import buffer from "../../img/buffer.png"


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      <span>For demo click on the images below.</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://tanishq-clone.netlify.app/">
            <img className="proimg" src={Sidebar} alt="" />
          </a>
          <p>Tanishq! Online Gold & Diamond Jewellery Shopping Store</p>
          <p>Technologies used:</p>
          <p>HTML | CSS | Javascript | MongoDb | Express</p>

          <a href="https://github.com/Luke0912/Tanishq.git">
            <button className="button n-button">Github</button>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://gaping-spring-1880.vercel.app/">
            <img className="proimg" src={buffer} alt="" />
          </a>
          <p>
            Buffer helps you build an audience organically. Grow your audience
            on social and beyond
          </p>
          <p>Technologies used:</p>
          <p>React | Redux | Chakra UI </p>
          <a href="https://github.com/sarkarsubho/gaping-spring-1880.git">
            <button className="button n-button">Github</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dynamic-tulumba-451ce4.netlify.app">
            <img className="proimg" src={game} alt="" />
          </a>
          <p>
            A word game where user got score with every correct word and time
            limit is 99 sec.
          </p>
          <p>Technologies used:</p>
          <p>HTML | CSS | Javascript</p>

          <a href="https://github.com/masai-course/deepak_fw14_659/tree/master/revision/word-game">
            <button className="button n-button">Github</button>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
