import React, { useState } from "react";
import Image from "next/image";
import styles from "./../../styles/Home_Page/Header.module.css";
import Navbar from "./Navbar";
import Typewriter from 'typewriter-effect';


const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.hero_section}>
        <Image src="/images/hero_section.png" layout="fill" alt="hero_image"></Image>
      </div>
      <Navbar myref={props.myref}></Navbar>
      <div className={styles.content}>
      <div className={styles.waving_hand} style={{transform: "rotate(160deg)"}}>👋</div>
        <div className={styles.greetings}>Hello</div><div  className={styles.greetings}>, I am</div>
        <div className={styles.name}>Swati Priya</div>
        <div className={styles.role}>
        <Typewriter options={{strings: ['Frontend Developer', 'Competative Programmer', 'Mentor'], autoStart: true, loop: true,}}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
