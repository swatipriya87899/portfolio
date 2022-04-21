import React from "react";
import Image from "next/image";
import styles from "./../../styles/Home_Page/Project_Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project_Card = (props) => {
  return (
    <div className={styles.cards}>
      <div style={{ background: "white", margin: "20px", borderRadius: "5px" }}>
        <Image
          src={props.image}
          width="300px"
          height="300px"
          style={{ borderRadius: "5px" }}
        ></Image>
      </div>
      <div className={styles.project_name}>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "500px",
          }}
        >
          {props.project_name}
        </div>
        <a href={props.github_link} target="_blank">
          <div className={styles.github_icon}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </div>
        </a>
      </div>
      <a href={props.project_link} target="_blank">
        <div className={styles.site_button}>Visit Site</div>
      </a>
    </div>
  );
};

export default Project_Card;
