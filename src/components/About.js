import React from "react";
import Image from "next/image";
import styles from "./../../styles/Home_Page/About.module.css";
import Heading from "./Heading";
import { motion } from "framer-motion";
import Link from "next/link";


const About = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={{
      hidden:{
        opacity:0
      },
      visible:{
        opacity:1
      }
    }
  }>
    <div id="about">
      <div className={styles.mobile_heading}>
         <Heading heading="About Me"></Heading>
      </div>
      <div className={styles.about}>
        <Image
          src="/images/profile_photo.png"
          width="300px"
          height="300px" alt="my_image"
        ></Image>
        <div className={styles.about_contant}>
        <div className={styles.desktop_heading}>
          <Heading heading="About Me"></Heading>
          </div>
          <div className={styles.contant}>
            <div><div style={{marginLeft:'15px'}}>👋 Hey! Just call me Technophile. </div>I Love to explore different tech stacks. I am Passionate about Coding with excellent problem-solving skills.</div>
          </div>
          <div className={styles.btn_wrapper}>
            <div className={styles.button}>
              <div>
                <Link  href="https://drive.google.com/file/d/1EnTBU9_7dsMbUOSUWbm3gDK1pw-62i0H/view?usp=sharing">
                <a
                  target="_blank"
                >
                  👁️
                </a>
                </Link>
              </div>
              <Link href="https://drive.google.com/file/d/1EnTBU9_7dsMbUOSUWbm3gDK1pw-62i0H/view?usp=sharing">
              <a
              target="_blank"
                download>
                <div className={styles.download }>Download Resume</div>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default About;
