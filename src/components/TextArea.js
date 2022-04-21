import React,{useState} from 'react';
import styles from "./../../styles/Home_Page/TextArea.module.css";

const TextArea = (props) => {
    const [textAreaValue, setTextAreaValue] = useState()
  return (
    <div>
        <textarea value={textAreaValue} name={props.name} onChange={(e)=>(setTextAreaValue(e.target.value))} rows={5} cols={5} className={styles.textarea} placeholder={props.placeholder}/>
    </div>
  )
}

export default TextArea