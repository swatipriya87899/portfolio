import React from "react";
import styles from "./../../styles/Home_Page/Heading.module.css";
import Hr from "./Hr";

const Heading = (props) => {
  return (
    <div className={styles.heading_div}>
      <div>
        <div className={styles.heading}>{props.heading}</div>
        <div className={styles.hr}>
          <Hr></Hr>
        </div>
      </div>
    </div>
  );
};

export default Heading;
