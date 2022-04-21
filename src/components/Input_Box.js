import React,{useState} from 'react';
import styles from "./../../styles/Home_Page/Input_Box.module.css";

const Input_Box = (props) => {
    const [input, setInput] = useState();
  return (
    <div>
        <input type={props.type} className={styles.input} placeholder={props.placeholder} name={props.name} value={input} onChange={(e)=>(setInput(e.target.value))}></input>
    </div>
  )
}

export default Input_Box