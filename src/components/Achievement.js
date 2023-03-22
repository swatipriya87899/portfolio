import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./../../styles/Home_Page/Achievement.module.css";
import Heading from "./Heading";

let achievement = [
  { image: "/images/hero_section_img.png", title: "SIH Winner" },
  {
    image: "/images/achievement2.jpeg",
    title: "Mentored 500+ Students",
  },
  {
    image: "/images/achievement3.jpeg",
    title: "Hackathon Winner at IIT BHU",
  },
];

const Achievement = () => {
  return (
    <div style={{marginTop:"60px"}}>
    <Heading heading="My Achievements"/>
    <Carousel infiniteLoop autoPlay interval={2000} showThumbs={false}>
      {achievement.map((target) => (
        <div className={styles.achievements}>
          <img src={target.image} width="100%" height="100%" style={{borderRadius:"10px"}}/>
          <div className="legend" style={{width:'60%', left:'65%'}}>{target.title}</div>
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default Achievement;
