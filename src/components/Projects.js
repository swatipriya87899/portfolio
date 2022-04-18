import React from 'react'
import Heading from './Heading';
import styles from './../../styles/Home_Page/Projects.module.css';
import Project_Card from './Project_Card';

const Projects = () => {
    const project_details=[
        {
            image:"/images/geekashram.png",
            name: "geekAshram",
            link: "https://geekashram.org/",
            github_link:"https://github.com/swatipriya87899/geekAshram"
        },
        {
            image:"/images/yatra.jpg",
            name:"Yatra",
            link:"https://yatra.netlify.app/",
            github_link:"https://github.com/swatipriya87899/geekAshram"
        },
        {
            image:"/images/embark_educare.png",
            name:"Embark Educare",
            link:"https://embarkeducare.com/",
            github_link:"https://github.com/swatipriya87899/geekAshram"
        },
        {
            image:"/images/ayurveda.png",
            name:"Ayurveda",
            link:"https://ayurveda-sih.netlify.app",
            github_link:"https://github.com/swatipriya87899/geekAshram"
        }
    ]
  return (
    <div className={styles.projects_section}>
        <Heading heading="Projects Made with ❤️" ></Heading>
        <div className={styles.card_group}>
            {/* Rendering project */}
        {
            project_details.map((project)=>(
             <Project_Card image={project.image} project_name={project.name} project_link={project.link} github_link={project.github_link}></Project_Card>
            ))
        }
        </div>
    </div>
  )
}

export default Projects