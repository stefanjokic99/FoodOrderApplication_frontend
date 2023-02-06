import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props) => {
  return (
    <div className={classes.Input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
