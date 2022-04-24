import React, { useState } from "react";
import styles from "./../../styles/Home_Page/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll/modules";
import Hr from "./Hr";

const Navbar = () => {
  //show navebar in mobile view
  const [showNav, setShowNav] = useState(false);

  const [activeHome, setActiveHome] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeContact, setActiveContact] = useState(false);


  let hamburgur_nav = {};

  if (showNav) {
    hamburgur_nav = {
      display: "flex",
    };
  }
 
  let navWrapper={
    background: "linear-gradient(to left, #d270f2, #727bff)"
  }
  
  if(!showNav){
    navWrapper={
      background: "transparent"
    }
  }



  return (
    <div className={styles.nav_wrapper} style={navWrapper}>
      <div className={styles.navbar}>
        <div className={styles.nav_links} style={hamburgur_nav}>
          <Link to="hero" spy="true" smooth="true" offset={50} duration={500}>
          <div className={styles.links} onMouseEnter={()=>setActiveHome(true)} onMouseLeave={()=>setActiveHome(false)}>Home
          {activeHome?<div className={styles.activeLink}></div>:""}
          </div>
          </Link>
          <Link to="about" spy="true" smooth="true" offset={-40} duration={500}>
          <div className={styles.links} onMouseEnter={()=>setActiveAbout(true)} onMouseLeave={()=>setActiveAbout(false)}>About
          {activeAbout?<div className={styles.activeLink}></div>:""}
          </div>
          </Link>
          <Link to="contact" spy="true" smooth="true" offset={50} duration={500}>
          <div className={styles.links} onMouseEnter={()=>setActiveContact(true)} onMouseLeave={()=>setActiveContact(false)}>Contact
          {activeContact?<div className={styles.activeLink}  style={{width:"100%"}}></div>:""}
          </div>
          </Link>
        </div>
        <div className={styles.hamburgur}>
          {!showNav ? (
              <div style={{marginLeft:"150px"}}>
            <FontAwesomeIcon
              icon={faBars}
              width="25px"
              className={styles.navbar_icon}
              onClick={() => setShowNav(true)}
            ></FontAwesomeIcon>
            </div>
          ) : (
            <FontAwesomeIcon
              icon={faXmark}
              width="25px"
              className={styles.xmark}
              onClick={() => setShowNav(false)}
            ></FontAwesomeIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
