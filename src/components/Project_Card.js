import React from "react";
import Image from "next/image";
import styles from "./../../styles/Home_Page/Project_Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion"
import Link from "next/link";

const Project_Card = (props) => {
  return (
    
    <div className={styles.cards}>
      <div style={{ background: "white", margin: "20px", borderRadius: "5px" }}>
      <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} style={{border:"none"}}
  >
        <Image
          src={props.image}
          width="280px"
          height="230px"
          style={{ borderRadius: "5px" }} alt="project_image"
        ></Image>
         </motion.button>
      </div>
      <div className={styles.project_name}>
        <div className={styles.projects_headings}
        >
          {props.project_name}
        </div>
        <Link href={props.github_link} >
        <a target="_blank">
          <div className={styles.github_icon}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </div>
        </a>
        </Link>
      </div>
      <Link  href={props.project_link}>
      <a target="_blank" >
        <div className={styles.site_button}>Visit Site</div>
      </a>
      </Link>
    </div>
  );
};

export default Project_Card;
