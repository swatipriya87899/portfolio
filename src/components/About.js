import React from 'react';
import Image from "next/image";
import styles from './../../styles/Home_Page/About.module.css';
import Heading from './Heading';

const About = () => {
  return (
    <div className={styles.about}>
         <Image src="/images/profile_photo.png" width="300px" height="300px"></Image>
         <div className={styles.about_contant}>
             <Heading heading="About Me"></Heading>
             <div className={styles.contant}>
             A keen believer in innovation and analysis capacity is combined with design thinking. My primary goal is to provide a richly engaging and innovative user experience to the user. Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1
             </div>
             <div className={styles.btn_wrapper}>
             <div className={styles.button}>
             <div>
               <a href="https://drive.google.com/file/d/1EnTBU9_7dsMbUOSUWbm3gDK1pw-62i0H/view?usp=sharing">
               👁️
               </a>
               </div>
               <a href="https://drive.google.com/file/d/1EnTBU9_7dsMbUOSUWbm3gDK1pw-62i0H/view?usp=sharing" download={true}>
               <div className={styles.download}>Download Resume</div>
               </a>
             </div>
             </div>
         </div>
    </div>
  )
}

export default About