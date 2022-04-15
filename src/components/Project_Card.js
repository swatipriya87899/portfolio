import React from "react";
import Image from 'next/image';
import styles from './../../styles/Home_Page/Project_Card.module.css';

const Project_Card = (props) => {
  return (

    <div>
    <div style={{background:'white', margin:'20px', borderRadius:'5px'}}>
      <Image src={props.image}  width="300px" height="300px" style={{ borderRadius:'5px'}}></Image>
    </div>
    <div style={{fontSize:'24px', fontWeight:'bold', marginLeft:'30px', marginTop:'-20px'}}>Yatra</div>
    <div className={styles.site_button}>Visit Site</div>
    </div>
  );
};

export default Project_Card;
