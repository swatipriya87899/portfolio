import React from "react";
import styles from "./../../styles/Home_Page/Button.module.css";

const Button = (props) => {
  return (
    <div>
      <div>
        <a href="">
          <div className={styles.button}>{props.button_name}</div>
        </a>
      </div>
    </div>
  );
};

export default Button;
