import React, { useState } from "react";
import Image from "next/image";
import styles from "./../../styles/Home_Page/Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.hero_section}>
        <Image src="/images/hero_section.png" layout="fill"></Image>
      </div>
      <Navbar></Navbar>
      <div className={styles.content}>
        <div className={styles.greetings}>Hello <div className={styles.waving_hand}>👋</div>, I am</div>
        <div className={styles.name}>Swati Priya</div>
        <div className={styles.role}>Frontend Developer</div>
      </div>
    </div>
  );
};

export default Header;
