import React from 'react'
import Heading from './Heading';
import styles from './../../styles/Home_Page/Projects.module.css';
import Project_Card from './Project_Card';
import Button from './Button';

const Projects = () => {
    const project_details=[
        {
            image:"/images/geekashram.png",
            name: "geekAshram",
            link: "https://geekashram.netlify.app/",
            github_link:"https://github.com/swatipriya87899/geekAshram"
        },
        {
            image:"/images/portfolio.png",
            name: "Portfolio",
            link: "http://swati-priya.me/",
            github_link:"https://github.com/swatipriya87899/portfolio"
        },
        {
            image:"/images/redux-todo.png",
            name: "Add Note",
            link: "https://redux-todo-mauve.vercel.app",
            github_link:"https://github.com/swatipriya87899/redux-todo"
        },
        ,
        {
            image:"/images/fakeshop.png",
            name:"SkopKaro",
            link:"https://shop-kro-gules.vercel.app/",
            github_link:"https://github.com/swatipriya87899/ShopKro"
        },
        {
            image:"/images/fitrakho.png",
            name:"FitRakho",
            link:"https://fit-rakho.vercel.app/",
            github_link:"https://github.com/swatipriya87899/FitRakho"
        },
        {
            image:"/images/spacex.png",
            name:"SpaceX",
            link:"https://spacex-blond.vercel.app/",
            github_link:"https://github.com/swatipriya87899/spacex"
        },
        {
            image:"/images/yatra.jpg",
            name:"Yatra",
            link:"https://yatra.netlify.app/",
            github_link:"https://github.com/swatipriya87899/Yatra"
        },
        {
            image:"/images/embark_educare.png",
            name:"Embark Educare",
            link:"https://embarkeducare.com/",
            github_link:""
        },
        {
            image:"/images/comming_soon_page.png",
            name:"Comming Soon",
            link:"https://cream-n-layers.netlify.app/",
            github_link:""
        }
    ]
  return (
    <div className={styles.projects_section}>
        <div className={styles.desktop_view}>
        <Heading heading="Projects Made with ❤️" width="50%"></Heading>
        </div>
        <div className={styles.mobile_view}>
        <Heading heading="Projects Made with ❤️" styling={{fontSize:"24px"}}></Heading>
        </div>
        <div className={styles.card_group}>
            {/* Rendering project */}
        {
            project_details.map((project)=>(
             <Project_Card image={project.image} project_name={project.name} project_link={project.link} github_link={project.github_link} key={project.link} className={styles.projects}></Project_Card>
            ))
        }
        </div>
    </div>
  )
}

export default Projects