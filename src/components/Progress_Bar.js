import React from "react";
import styles from "./../../styles/Home_Page/Progress_Bar.module.css";

const Progress_Bar = (props) => {
  return (
    <div style={{margin:"15px 0px"}}>
      <div className={styles.technical_skill}>{props.skill}</div>
      <div style={{ width: "400px" }}>
        <div className={styles.progress_bar}>
          <div
            className={styles.progress}
            style={{ width: `${props.progress_width}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress_Bar;
