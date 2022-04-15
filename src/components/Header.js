import React from "react";
import Image from "next/image";
import styles from "./../../styles/Home_Page/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.hero_section}>
        <Image src="/images/hero_section.png" layout="fill"></Image>
      </div>
      <div className={styles.navbar}>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className={styles.content}>
        <div className={styles.greetings}>Hello, I am</div>
        <div className={styles.name}>Swati Priya</div>
        <div className={styles.role}>Frontend Developer</div>
      </div>
    </div>
  );
};

export default Header;
