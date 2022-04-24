import React from "react";
import styles from "./../../styles/Home_Page/Skills.module.css";
import Heading from "./Heading";
import Image from "next/image";
import Progress_Bar from "./Progress_Bar";
import { motion } from "framer-motion"

const Skills = () => {
  //skill with progress
  const skills = [
    {
      skill: "NodeJs",
      progress: "50%",
    },
    {
      skill: "Reactjs",
      progress: "80%",
    },
    {
      skill: "JavaScript",
      progress: "60%",
    },
    {
      skill: "DSA",
      progress: "80%",
    },
    {
      skill: "C++",
      progress: "90%",
    },
    {
      skill: "C",
      progress: "95%",
    },
    {
      skill: "HTML",
      progress: "97%",
    },
    {
      skill: "CSS",
      progress: "90%",
    },
    {
      skill: "Bootstrap",
      progress: "90%",
    },
    {
      skill: "GIT/GITHUB",
      progress: "50%",
    },
  ];
  return (
    <motion.ul
   
  >
    <div className={styles.skills}>
      <div className={styles.web_development}>
        <div className={styles.skill_heading}>
          <Heading heading="Love To Code 👨‍💻" width="40%"></Heading>
        </div>
        <div className={styles.skills_heading_for_mobile}>Web Development</div>
        <div className={styles.skills_images}>
          <div className={styles.web_development}>
            <Image
              src="/images/web_dev_skills.png"
              width="400px"
              height="300px"
            ></Image>
          </div>
          <div className={styles.content}>
            <div className={styles.skills_heading_for_desktop}>Web Development</div>
            <div>
              <ul className={styles.problem_solving}>
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
            height="300px"
          ></Image>
        </div>
        <div className={styles.content} style={{marginBottom:"30px"}}>
          <div className={styles.skills_heading_for_desktop}>Problem Solving</div>
          <div>
            <ul className={styles.problem_solving}>
              <li>✔️ 2.5⭐ on Leetcode</li>
              <li>✔️ 2⭐ on CodeChef</li>
              <li>✔️ Solved 250+ problems on Leetcode and GFG</li>
            </ul>
          </div>
        </div>
        <div className={styles.skills_image_desktop}>
          <Image
            src="/images/programming_skills.png"
            width="400px"
            height="300px"
          ></Image>
        </div>
      </div>
    </div>
    </motion.ul>
  );
};

export default Skills;
