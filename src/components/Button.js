import React from "react";
import styles from "./../../styles/Home_Page/Button.module.css";

const Button = (props) => {
  return (
    <div>
      <div>
        <a href="">
          <button type="submit" className={styles.button}>{props.button_name}</button>
        </a>
      </div>
    </div>
  );
};

export default Button;
