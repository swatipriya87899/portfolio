import React from "react";
import styles from "./../../styles/Home_Page/Skills.module.css";
import Heading from "./Heading";
import Progress_Bar from "./Progress_Bar";

const Skills = () => {
  //skill with progress
  const skills=[
    {
      skill:"NodeJs",
      progress:"50%"
    },
    {
      skill:"Reactjs",
      progress:"80%"
    },
    {
      skill:"JavaScript",
      progress:"60%"
    },
    {
      skill:"DSA",
      progress:"80%"
    },
    {
      skill:"C++",
      progress:"90%"
    },
    {
      skill:"C",
      progress:"95%"
    },
    {
      skill:"HTML",
      progress:"97%"
    },
    {
      skill:"CSS",
      progress:"90%"
    },
    {
      skill:"Bootstrap",
      progress:"90%"
    },
    {
      skill:"GIT/GITHUB",
      progress:"50%"
    },
  ]
  return (
    <div className={styles.skills}>
      <div className={styles.skill_heading}>
        <Heading heading="My Technical Skills"></Heading>
      </div>
      <div className={styles.progress_tab}>
            {
              skills.map((skills)=> (<Progress_Bar skill={skills.skill} progress_width={skills.progress}></Progress_Bar>))
            }
      </div>
    </div>
  );
};

export default Skills;
