import React from "react";
import styles from "./../../styles/Home_Page/Skills.module.css";
import Heading from "./Heading";
import Image from "next/image";
import { motion } from "framer-motion"

const Skills = () => {
  
  return (
    <motion.ul
   
  >
    <div className={styles.skills}>
      <div className={styles.web_development}>
        <div className={styles.skill_heading}>
          <Heading heading="Love To Code 👨‍💻" width="40%"></Heading>
        </div>
        <div className={styles.skills_heading_for_mobile}>Web & App Development</div>
        <div className={styles.skills_images}>
          <div className={styles.web_development}>
            <Image
              src="/images/web_dev_skills.png"
              width="400px"
              height="300px" alt="dev_skills"
            ></Image>
          </div>
          <div className={styles.content}>
            <div className={styles.skills_heading_for_desktop}>Web & App Development</div>
            <div>
              <ul className={styles.problem_solving}>
                <li>✔️ SIH Winner'22 (Create App & Web)</li>
                <li>✔️ Provide Mentorship</li>
                <li>✔️ Frontend Developer Intership</li>
                <li>✔️ MERN DONE</li>
                <li>✔️ Good Hold on JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skills_heading_for_mobile}>Problem Solving</div>
      <div className={styles.skills_images}>
        <div className={styles.skills_image_mobile}>
          <Image
            src="/images/programming_skills.png"
            width="400px"
            height="300px" alt="programming_skill"
          ></Image>
        </div>
        <div className={styles.content} style={{marginBottom:"30px"}}>
          <div className={styles.skills_heading_for_desktop}>Problem Solving</div>
          <div>
            <ul className={styles.problem_solving}>
              <li>✔️ Provide Mentorship</li>
              {/* <li>✔️ 2.5⭐ on Leetcode</li>
              <li>✔️ 2⭐ on CodeChef</li> */}
              <li>✔️ Solved 400+ problems on Leetcode and GFG</li>
            </ul>
          </div>
        </div>
        <div className={styles.skills_image_desktop}>
          <Image
            src="/images/programming_skills.png"
            width="400px"
            height="300px" alt="programming_skill"
          ></Image>
        </div>
      </div>
    </div>
    </motion.ul>
  );
};

export default Skills;
