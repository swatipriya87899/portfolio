import React from "react";
import styles from "./../../styles/Home_Page/Contact.module.css";
import Button from "./Button";
import Heading from "./Heading";
import Input_Box from "./Input_Box";
import TextArea from "./TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';
import Link from 'next/link'


const Contact = () => {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm("service_5foxzh6","template_e35orlt",e.target,"uzd-Mqv5HY0qcPmi6")
    .then(res=>{
      console.log(res);
    }).catch(
      err=> console.log(err)
    )
  }
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.heading}>
        <Heading heading="Contact" styling={{color:'#FFF'}}></Heading>
      </div>
      <div className={styles.contact_form}>
        <div className={styles.message}>
          <form onSubmit={sendEmail}>
          <Input_Box type="text" placeholder="Your Name" name="name"></Input_Box>
          <Input_Box type="email" placeholder="Your Email" name="user_email"></Input_Box>
          <TextArea name="message" placeholder="Message For Me"></TextArea>
          <Button button_name="Submit"></Button>
          </form>
        </div>
        <div className={styles.profession_contact}>
          <div className={styles.social_media}>
            <div className={styles.social_media_style}>
            <a href="https://www.linkedin.com/in/swati-priya-21072002/">
            <FontAwesomeIcon icon={faLinkedinIn} width="25px"></FontAwesomeIcon>
            </a>
            </div>
            <div className={styles.social_media_style}>
            <a href="https://github.com/swatipriya87899">
            <FontAwesomeIcon icon={faGithub} width="25px"></FontAwesomeIcon>
            </a>
            </div>
            <div className={styles.social_media_style}>
            <a href="mailto:swatipriya87899@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} width="25px"></FontAwesomeIcon>
            </a>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
