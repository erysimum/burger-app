import React from "react";
import classes from "../BuildControl/BuildControl.module.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.itemRemoved}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.itemAdded}>
      More
    </button>
  </div>
);

export default buildControl;
