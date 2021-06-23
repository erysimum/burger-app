import React from "react";
import classes from "../Backdrop/Backdrop.module.css";

const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.modalClose}></div>
  ) : null;

export default backdrop;

/* import React from "react";
import classes from "../Navigation/Toolbar/Toolbar.module.css";

const toolbar = () => (
  <header classes={classes.Toolbar}>
    <div>Menu</div>
    <div>Logo</div>
    <nav>...</nav>
  </header>
);

export default toolbar;


.Toolbar {
  width: 100%;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: brown;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
}

.Toolbar nav {
  height: 100%;
}
 */
