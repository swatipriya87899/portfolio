import React from "react";
import Image from "next/image";
import styles from "./../../styles/Home_Page/About.module.css";
import Heading from "./Heading";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
      <div id="about">
        <div className={styles.mobile_heading}>
          <Heading heading="About Me"></Heading>
        </div>
        <div className={styles.about}>
          <Image
            src="/images/profile_photo.png"
            width="350px"
            height="150px"
            alt="my_image"
          ></Image>
          <div className={styles.about_contant}>
            <div className={styles.desktop_heading}>
              <Heading heading="About Me"></Heading>
            </div>
            <div className={styles.contant}>
              <div>
                <div style={{ marginLeft: "15px", textAlign: "center" }}>
                  👋 Hey! Just call me Technophile.👩‍💻{" "}
                </div>
                I Love to explore different tech stacks. I am passionate about
                Coding with excellent problem-solving skills. I always stay
                curious and believe in continuous learning and improving skills.
                I am willing to adapt to new technologies and trends.
                <div>
                  Other than technology, I love❤️ to spend time with books📚 and
                  also love to listen to audiobooks🔊 Some of my favourite books
                  are "
                  <span style={{ fontWeight: "bold" }}>
                    🤔Think and Grow Rich🤑
                  </span>
                  ", "<span style={{fontWeight:"bold"}}>The Secret🤫</span>" and "<span style={{fontWeight:"bold"}}>The Law of attraction📄✍</span>".
                </div>
               
              </div>
            </div>
            <div className={styles.btn_wrapper}>
              <div className={styles.button}>
                <div>
                  <Link href="/Resume.pdf">
                    <a target="_blank">👁️</a>
                  </Link>
                </div>
                <Link href="/Resume.pdf">
                  <a target="_blank" download>
                    <div className={styles.download}>Download Resume</div>
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
