import React from "react";
import LogoPic from "../../../src/assets/27.1 burger-logo.png.png";
import classes from "../Logo/Logo.module.css";
import Aux from "../../../src/hoc/Aux";

const logo = () => (
  <div className={classes.Logo}>
    <img src={LogoPic} alt='My BuRgEr' />
  </div>
);

export default logo;
