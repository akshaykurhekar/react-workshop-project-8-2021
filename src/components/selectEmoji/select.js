import React, { useState } from "react";
import Card from "../card/card";
import Styles from "./select.module.css";

const Select = ({ getEmoji }) => {
  const [flag, setFlag] = useState(false);  
 
  const onClickHandler = () => {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };


  return (
    <div style={{ alignItems: "center", marginTop: "2rem" }}>
      <div className={Styles.flexCol}>      
        <br/>
        <button onClick={onClickHandler}> select Emoji &#128514;</button>
        <br />
        {flag ? <Card getEmoji={getEmoji} /> : null}
      </div>
        <br/>      
    </div>
  );
};

export default Select;
