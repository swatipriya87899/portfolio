import React from 'react'
import Heading from './Heading';
import styles from './../../styles/Home_Page/Projects.module.css';
import Project_Card from './Project_Card';

const Projects = () => {
  return (
    <div className={styles.projects_section}>
        <Heading heading="Projects Made with ❤️" ></Heading>
        <div className={styles.card_group}>
        <Project_Card image="/images/geekashram.png"></Project_Card>
        <Project_Card image="/images/yatra.jpg"></Project_Card>
        <Project_Card image="/images/embark_educare.png"></Project_Card>
        {/* <Project_Card image="/images/ayurveda.png"></Project_Card> */}
        </div>
    </div>
  )
}

export default Projects