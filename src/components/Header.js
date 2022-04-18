import React,{useState} from "react";
import Image from "next/image";
import styles from "./../../styles/Home_Page/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  //show navebar in mobile view
  const [showNav, setShowNav] = useState(false)
  return (
    <div className={styles.header}>
      <div className={styles.hero_section}>
        <Image src="/images/hero_section.png" layout="fill"></Image>
      </div>
      <div className={styles.navbar}>
        <div className={styles.nav_links}>Home</div>
        <div className={styles.nav_links}>About</div>
        <div className={styles.nav_links}>Contact</div>
        <div className={styles.hamburgur}>
      <FontAwesomeIcon icon={faBars} width="25px" style={{color:'white'}} onClick={()=>(setShowNav(!showNav))}></FontAwesomeIcon>
      </div>
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
